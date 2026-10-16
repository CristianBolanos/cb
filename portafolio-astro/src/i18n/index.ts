import en from './en';
import es, { type Dictionary } from './es';

export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

/** Idiomas publicados. Para agregar uno nuevo, crea su diccionario con la misma forma que es.ts. */
const dictionaries: Record<Lang, Dictionary> = { es, en };

export const publishedLangs = Object.keys(dictionaries) as Lang[];

/** Locale para Open Graph y el atributo lang del HTML. */
export const locales: Record<Lang, { html: string; og: string }> = {
  es: { html: 'es-CO', og: 'es_CO' },
  en: { html: 'en', og: 'en_US' },
};

/**
 * Ruta pública sin la base del sitio ni la extensión .html
 * (p. ej. "/cb/en/services.html" → "/en/services", "/index.html" → "/").
 */
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const clean = path
    .replace(/\.html$/, '')
    .replace(/(^|\/)index$/, '')
    .replace(/\/$/, '');
  return clean || '/';
}

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = stripBase(url.pathname).split('/');
  return segment && segment !== defaultLang && segment in dictionaries
    ? (segment as Lang)
    : defaultLang;
}

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export type { Dictionary };
