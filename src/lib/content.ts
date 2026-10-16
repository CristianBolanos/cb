import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Lang } from '@/i18n';

type ProjectEntry = CollectionEntry<'projects'>;

const inLang =
  (lang: Lang) =>
  ({ id }: { id: string }) =>
    id.startsWith(`${lang}/`);

const byOrder = <T extends { data: { order: number } }>(a: T, b: T) => a.data.order - b.data.order;

/** "es/tienda-virtual" → "tienda-virtual" */
export const slugOf = (id: string) => id.slice(id.indexOf('/') + 1);

export async function getProjects(lang: Lang): Promise<ProjectEntry[]> {
  const entries = await getCollection('projects', (e) => inLang(lang)(e) && !e.data.draft);
  return entries.sort(byOrder);
}

/** Proyectos de clientes y demos comerciales (sin el laboratorio). */
export const isShowcase = (p: ProjectEntry) => p.data.category !== 'laboratorio';

export async function getServices(lang: Lang) {
  return (await getCollection('services', inLang(lang))).sort(byOrder);
}

export async function getFaq(lang: Lang) {
  return (await getCollection('faq', inLang(lang))).sort(byOrder);
}

export async function getTestimonials(lang: Lang) {
  return (await getCollection('testimonials', inLang(lang))).sort(byOrder);
}

/** Experiencia ordenada de la más reciente a la más antigua (los trabajos actuales primero). */
export async function getExperience(lang: Lang) {
  const entries = await getCollection('experience', inLang(lang));
  const endKey = (e: CollectionEntry<'experience'>) => e.data.end ?? '9999-12';
  return entries.sort(
    (a, b) => endKey(b).localeCompare(endKey(a)) || b.data.start.localeCompare(a.data.start),
  );
}

export async function getProfile(lang: Lang) {
  const entry = await getEntry('profile', lang);
  if (!entry) throw new Error(`Falta src/content/profile/${lang}.json`);
  return entry.data;
}
