import { SITE } from '@/config/site';
import { absoluteUrl } from '@/lib/url';

type JsonLd = Record<string, unknown>;

const personId = (site: URL | undefined) => `${absoluteUrl('/', site)}#persona`;

export function personSchema(
  site: URL | undefined,
  jobTitle: string,
  knowsAbout: string[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId(site),
    name: SITE.fullName,
    alternateName: SITE.name,
    jobTitle,
    url: absoluteUrl('/', site),
    email: `mailto:${SITE.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    sameAs: Object.values(SITE.socials),
    knowsAbout,
  };
}

export function professionalServiceSchema(
  site: URL | undefined,
  options: { role: string; catalogName: string; services: { title: string; summary: string }[] },
): JsonLd {
  const { role, catalogName, services } = options;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${SITE.name} · ${role}`,
    url: absoluteUrl('/', site),
    image: absoluteUrl(SITE.defaultOgImage, site),
    founder: { '@id': personId(site) },
    areaServed: { '@type': 'Country', name: 'Colombia' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: catalogName,
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.summary },
      })),
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbSchema(
  site: URL | undefined,
  items: { name: string; path: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, site),
    })),
  };
}
