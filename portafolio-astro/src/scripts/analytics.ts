/**
 * Medición de conversiones sin cookies.
 * Cualquier elemento con data-track="nombre_evento" registra un evento al hacer clic;
 * data-track-location indica desde qué parte de la página se hizo.
 *
 * TODO: conectar el proveedor elegido (Cloudflare Web Analytics, Umami o Plausible).
 * Umami y Plausible exponen window.umami.track / window.plausible; aquí ya se llaman si existen.
 */

type Props = Record<string, string>;

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Props) => void };
    plausible?: (event: string, options?: { props?: Props }) => void;
  }
}

export function track(event: string, props: Props = {}): void {
  window.umami?.track(event, props);
  window.plausible?.(event, { props });
  if (import.meta.env.DEV) console.debug('[analytics]', event, props);
}

document.addEventListener('click', (event) => {
  const element = (event.target as Element | null)?.closest<HTMLElement>('[data-track]');
  if (!element?.dataset.track) return;
  track(element.dataset.track, {
    location: element.dataset.trackLocation ?? 'unknown',
    page: window.location.pathname,
  });
});
