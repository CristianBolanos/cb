import type { Lang } from '@/i18n';

/**
 * Rutas traducidas. Cada página tiene una clave y su ruta en cada idioma.
 * Para agregar un idioma: añade su ruta aquí, su diccionario en src/i18n y sus páginas en src/pages/<idioma>.
 */
export const ROUTES = {
  home: { es: '/', en: '/en' },
  services: { es: '/servicios', en: '/en/services' },
  projects: { es: '/proyectos', en: '/en/projects' },
  cv: { es: '/cv', en: '/en/resume' },
  contact: { es: '/contacto', en: '/en/contact' },
  privacy: { es: '/privacidad', en: '/en/privacy' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof ROUTES;

/** Ruta (sin la base del sitio) de una página en un idioma. */
export function pathFor(key: RouteKey, lang: Lang): string {
  return ROUTES[key][lang];
}

/** Ruta del caso de un proyecto en un idioma. */
export function projectPath(slug: string, lang: Lang): string {
  return `${ROUTES.projects[lang]}/${slug}`;
}

/**
 * Equivalente de una ruta en otro idioma (para el selector de idioma y las etiquetas hreflang).
 * Recibe la ruta sin la base del sitio.
 */
export function translatePath(path: string, from: Lang, to: Lang): string {
  const clean = path.replace(/\/$/, '') || '/';
  const projectsBase = ROUTES.projects[from];
  if (clean.startsWith(`${projectsBase}/`)) {
    return projectPath(clean.slice(projectsBase.length + 1), to);
  }
  const key = (Object.keys(ROUTES) as RouteKey[]).find((k) => ROUTES[k][from] === clean);
  return key ? ROUTES[key][to] : ROUTES.home[to];
}
