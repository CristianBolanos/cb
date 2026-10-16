const EXTERNAL = /^(?:[a-z]+:|#|\/\/)/i;

/** Antepone la ruta base del sitio (BASE_PATH) a una ruta interna. */
export function withBase(path: string): string {
  if (EXTERNAL.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
}

/** URL absoluta (para canonical, Open Graph y JSON-LD). */
export function absoluteUrl(path: string, site: URL | undefined): string {
  if (/^https?:/i.test(path)) return path;
  return new URL(withBase(path), site).href;
}

/** Compara la ruta actual (sin base, ver stripBase) con un enlace del menú. */
export function isCurrentPath(currentPath: string, href: string): boolean {
  const target = href.replace(/\/$/, '') || '/';
  return currentPath === target || currentPath.startsWith(`${target}/`);
}
