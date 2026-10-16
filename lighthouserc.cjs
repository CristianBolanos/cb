/**
 * Lighthouse CI audita el mismo dist/ que se publica, servido con `astro preview` en la base del build
 * (BASE_PATH, igual que astro.config.mjs y las pruebas E2E). Con `staticDistDir` el sitio se servía
 * en la raíz: con un build para /cb, estilos, scripts e imágenes darían 404, y auditar en la raíz
 * exigiría un segundo build distinto del que se publica.
 */
const trimmed = (process.env.BASE_PATH ?? '/').replace(/^\/+|\/+$/g, '');
const base = trimmed ? `/${trimmed}` : '';
const PORT = 4331;
const HOST = '127.0.0.1';

const ROUTES = [
  '/',
  '/servicios',
  '/proyectos',
  '/proyectos/sistema-pedidos',
  '/cv',
  '/contacto',
  '/en',
];

module.exports = {
  ci: {
    collect: {
      // --ignore-lock: Astro admite una sola vista previa por proyecto; esta no choca con otra abierta.
      startServerCommand: `pnpm preview --port ${PORT} --host ${HOST} --ignore-lock`,
      // LHCI espera 10 s a que el servidor diga "ready"; en Windows `pnpm preview` a veces tarda más.
      startServerReadyTimeout: 60_000,
      url: ROUTES.map((route) => `http://${HOST}:${PORT}${base}${route}`),
      numberOfRuns: 3,
      settings: {
        skipAudits: ['uses-http2'],
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
  },
};
