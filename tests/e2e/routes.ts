/** Rutas públicas que deben existir y pasar las verificaciones, en ambos idiomas. */
export const ROUTES_ES = [
  '/',
  '/servicios',
  '/proyectos',
  '/proyectos/sistema-pedidos',
  '/proyectos/tienda-virtual',
  '/proyectos/gestion-marketplaces-gema',
  '/cv',
  '/contacto',
  '/privacidad',
] as const;

export const ROUTES_EN = [
  '/en',
  '/en/services',
  '/en/projects',
  '/en/projects/sistema-pedidos',
  '/en/projects/tienda-virtual',
  '/en/projects/gestion-marketplaces-gema',
  '/en/resume',
  '/en/contact',
  '/en/privacy',
] as const;

export const ROUTES = [...ROUTES_ES, ...ROUTES_EN];

export const WHATSAPP_PREFIX = 'https://wa.me/573167341074?text=';
