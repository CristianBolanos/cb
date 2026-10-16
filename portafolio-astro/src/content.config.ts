import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Cada colección se organiza por idioma: src/content/<colección>/<es|en>/<entrada>.
 * El id de cada entrada incluye el idioma (p. ej. "es/tienda-virtual"); usa los helpers de
 * src/lib/content.ts para filtrarlas por idioma y obtener el slug limpio.
 */

export const SERVICE_IDS = ['gestion-ecommerce', 'tiendas-landing', 'automatizacion'] as const;
export const PROJECT_CATEGORIES = [
  'ecommerce',
  'automatizacion',
  'landing',
  'web',
  'laboratorio',
] as const;
export const EXPERIENCE_AREAS = ['ecommerce', 'operaciones', 'tecnologia'] as const;

const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Formato esperado: AAAA-MM');

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(180),
      category: z.enum(PROJECT_CATEGORIES),
      /** "demo": proyecto de ejemplo. "real": trabajo hecho para una empresa o cliente. */
      kind: z.enum(['demo', 'real']),
      featured: z.boolean().default(false),
      order: z.number().int(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      problem: z.string(),
      solution: z.string(),
      result: z.string(),
      highlights: z.array(z.string()).default([]),
      idealFor: z.string().optional(),
      stack: z.array(z.string()).min(1),
      aiTools: z.array(z.string()).default([]),
      service: z.enum(SERVICE_IDS).optional(),
      demoUrl: z.url().optional(),
      repoUrl: z.url().optional(),
      draft: z.boolean().default(false),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string().optional(),
    sector: z.string().optional(),
    engagement: z.string().optional(),
    location: z.string().default('Cali, Colombia'),
    area: z.enum(EXPERIENCE_AREAS),
    start: yearMonth,
    /** null = trabajo actual */
    end: yearMonth.nullable(),
    responsibilities: z.array(z.string()).min(1),
    achievements: z.array(z.string()).default([]),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    serviceId: z.enum(SERVICE_IDS),
    order: z.number().int(),
    icon: z.string(),
    title: z.string(),
    summary: z.string(),
    outcome: z.string(),
    includes: z.array(z.string()).min(1),
    idealFor: z.string(),
    whatsappMessage: z.string(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
  schema: z.object({
    order: z.number().int(),
    question: z.string(),
    answer: z.string(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    order: z.number().int(),
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    company: z.string().optional(),
  }),
});

const profile = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/profile' }),
  schema: z.object({
    headline: z.string(),
    tagline: z.string(),
    location: z.string(),
    availability: z.string(),
    summary: z.array(z.string()).min(1),
    targetRoles: z.array(z.string()).min(1),
    skills: z.array(z.object({ title: z.string(), items: z.array(z.string()).min(1) })),
    education: z.array(z.object({ title: z.string(), institution: z.string().optional() })),
    courses: z.array(
      z.object({ title: z.string(), issuer: z.string().optional(), year: z.number().optional() }),
    ),
  }),
});

export const collections = { projects, experience, services, faq, testimonials, profile };
