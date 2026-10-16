import { track } from '@/scripts/analytics';

interface Messages {
  required: string;
  invalidEmail: string;
  tooShort: string;
  consentRequired: string;
  sending: string;
  submit: string;
}

type Field = HTMLInputElement | HTMLTextAreaElement;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Devuelve el mensaje de error de un campo o null si es válido. */
function validate(field: Field, messages: Messages): string | null {
  const value = field.value.trim();
  if (field instanceof HTMLInputElement && field.type === 'checkbox') {
    return field.required && !field.checked ? messages.consentRequired : null;
  }
  if (field.required && !value) return messages.required;
  if (field.type === 'email' && value && !EMAIL_PATTERN.test(value)) return messages.invalidEmail;
  if (field.minLength > 0 && value.length < field.minLength) return messages.tooShort;
  return null;
}

function showError(field: Field, message: string | null): void {
  const error = document.getElementById(`${field.id}-error`);
  field.setAttribute('aria-invalid', String(Boolean(message)));
  if (!error) return;
  error.textContent = message ?? '';
  error.classList.toggle('hidden', !message);
}

export function initContactForm(form: HTMLFormElement): void {
  const messages = JSON.parse(form.dataset.messages ?? '{}') as Messages;
  const fields = [...form.querySelectorAll<Field>('[required]')];
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]');
  const budgetGroup = form.querySelector<HTMLElement>('[data-budget-group]');
  const radio = (name: string, value: string) =>
    form.querySelector<HTMLInputElement>(`input[name="${name}"][value="${CSS.escape(value)}"]`);
  const checkedValue = (name: string) =>
    form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`)?.value ?? '';
  const firstOption = (name: string) =>
    form.querySelector<HTMLInputElement>(`input[name="${name}"]`);

  // El presupuesto solo aplica a negocios; un reclutador ve "Oferta de empleo".
  const syncProfile = () => {
    const isRecruiter = checkedValue('perfil') === 'reclutador';
    if (budgetGroup) budgetGroup.hidden = isRecruiter;
    if (isRecruiter) {
      const job = radio('servicio', 'empleo');
      if (job) job.checked = true;
    } else if (checkedValue('servicio') === 'empleo') {
      const first = firstOption('servicio');
      if (first) first.checked = true;
    }
  };

  // Permite llegar con el formulario preconfigurado: /contacto?perfil=reclutador&servicio=automatizacion
  const params = new URLSearchParams(window.location.search);
  for (const name of ['perfil', 'servicio']) {
    const value = params.get(name);
    const option = value ? radio(name, value) : null;
    if (option) option.checked = true;
  }
  syncProfile();
  form
    .querySelectorAll('input[name="perfil"]')
    .forEach((radio) => radio.addEventListener('change', syncProfile));

  fields.forEach((field) => {
    field.addEventListener('blur', () => {
      if (field.value || field.getAttribute('aria-invalid') === 'true')
        showError(field, validate(field, messages));
    });
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true')
        showError(field, validate(field, messages));
    });
  });

  const setSending = (sending: boolean) => {
    if (submitButton) submitButton.disabled = sending;
    if (submitLabel) submitLabel.textContent = sending ? messages.sending : messages.submit;
    form.setAttribute('aria-busy', String(sending));
  };

  const showStatus = (kind: 'success' | 'error') => {
    const template = form.querySelector<HTMLTemplateElement>(`[data-${kind}-template]`);
    if (!status || !template) return;
    status.replaceChildren(template.content.cloneNode(true));
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status?.replaceChildren();

    const errors = fields.map((field) => {
      const message = validate(field, messages);
      showError(field, message);
      return message ? field : null;
    });
    const firstInvalid = errors.find(Boolean);
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    setSending(true);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const profile = checkedValue('perfil') || 'negocio';
      track('submit_form', { profile, service: checkedValue('servicio') });
      form.reset();
      syncProfile();
      showStatus('success');
    } catch {
      showStatus('error');
    } finally {
      setSending(false);
    }
  });
}
