import { expect, test, type Page } from '@playwright/test';

const FORM_ENDPOINT = 'https://formspree.io/**';

async function fillValidForm(page: Page) {
  await page.getByLabel('Nombre', { exact: true }).fill('Ana Pérez');
  await page.getByLabel('Correo electrónico', { exact: true }).fill('ana@empresa.com');
  await page
    .getByLabel('Mensaje', { exact: true })
    .fill('Quiero mejorar el catálogo de mi tienda en Falabella.');
  await page.getByLabel('Tienda online o landing page').check();
  await page.getByRole('checkbox').check();
}

test.describe('Formulario de contacto', () => {
  test('muestra errores accesibles si los campos están vacíos', async ({ page }) => {
    let submitted = false;
    await page.route(FORM_ENDPOINT, (route) => {
      submitted = true;
      return route.fulfill({ status: 200, body: '{}' });
    });

    await page.goto('/contacto');
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();

    const name = page.getByLabel('Nombre', { exact: true });
    await expect(name).toHaveAttribute('aria-invalid', 'true');
    await expect(name).toBeFocused();
    await expect(page.locator('#nombre-error')).toHaveText('Este campo es obligatorio.');
    await expect(page.locator('#consentimiento-error')).toHaveText(
      'Necesito tu autorización para responderte.',
    );
    expect(submitted).toBe(false);
  });

  test('valida el formato del correo', async ({ page }) => {
    await page.goto('/contacto');
    await page.getByLabel('Correo electrónico', { exact: true }).fill('correo-invalido');
    await page.getByLabel('Correo electrónico', { exact: true }).blur();
    await expect(page.locator('#email-error')).toContainText('correo válido');
  });

  test('envía el formulario y confirma al usuario', async ({ page }) => {
    let body = '';
    await page.route(FORM_ENDPOINT, async (route) => {
      body = route.request().postData() ?? '';
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
    });

    await page.goto('/contacto');
    await fillValidForm(page);
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();

    await expect(page.getByRole('status')).toContainText('Recibí tu mensaje');
    expect(body).toContain('ana@empresa.com');
    expect(body).toContain('negocio');
    expect(body).toContain('tiendas-landing');
    await expect(page.getByLabel('Nombre', { exact: true })).toHaveValue('');
  });

  test('informa si el envío falla', async ({ page }) => {
    await page.route(FORM_ENDPOINT, (route) => route.fulfill({ status: 500, body: '{}' }));
    await page.goto('/contacto');
    await fillValidForm(page);
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();
    await expect(page.getByRole('status')).toContainText('No se pudo enviar');
  });

  test('desde el CV llega configurado para reclutadores', async ({ page }) => {
    await page.goto('/contacto?perfil=reclutador');
    await expect(page.getByLabel('Soy reclutador o empresa')).toBeChecked();
    await expect(page.getByLabel('Oferta de empleo')).toBeChecked();
    await expect(page.locator('[data-budget-group]')).toBeHidden();

    await page.getByLabel('Tengo un negocio').check();
    await expect(page.locator('[data-budget-group]')).toBeVisible();
    await expect(page.getByLabel('Oferta de empleo')).not.toBeChecked();
  });

  test('el campo trampa para bots no es visible', async ({ page }) => {
    await page.goto('/contacto');
    await expect(page.locator('input[name="_gotcha"]')).toBeHidden();
  });
});
