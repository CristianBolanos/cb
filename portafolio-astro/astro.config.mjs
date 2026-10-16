// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

/**
 * URL pública y ruta base del sitio. Se definen por variables de entorno para poder
 * desplegar en Cloudflare Pages / Netlify (dominio propio, base "/") o en GitHub Pages (base "/cb").
 * TODO: cuando exista el dominio propio, configurar SITE_URL en el hosting.
 */
const site = process.env.SITE_URL ?? 'https://cristianbolanos.github.io';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'never',
  build: { format: 'file' },

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },

  integrations: [icon(), sitemap({ filter: (page) => !page.includes('/404') })],

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: [
              '@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2',
            ],
            weight: '200 800',
            style: 'normal',
          },
        ],
      },
    },
  ],

  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://formspree.io",
        "form-action 'self' https://formspree.io",
        "base-uri 'self'",
        "object-src 'none'",
      ],
    },
  },

  // Sin resaltado de código: Shiki usa estilos en línea incompatibles con la CSP.
  markdown: { syntaxHighlight: false },

  vite: {
    plugins: [tailwindcss()],
  },
});
