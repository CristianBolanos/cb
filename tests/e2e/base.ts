/**
 * Ruta base del sitio: la misma BASE_PATH que lee astro.config.mjs, normalizada como lo hace Astro.
 * '' en la raíz y '/cb' en GitHub Pages. El build y las pruebas deben usar el mismo valor.
 */
const trimmed = (process.env.BASE_PATH ?? '/').replace(/^\/+|\/+$/g, '');
export const BASE = trimmed ? `/${trimmed}` : '';

/** Antepone la base a una ruta del sitio: '/contacto' → '/cb/contacto' y '/' → '/cb/'. */
export const withBase = (route: string) => `${BASE}${route}`;
