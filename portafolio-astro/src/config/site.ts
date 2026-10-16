/** Datos de identidad y contacto. Es el único lugar donde se cambian. */
export const SITE = {
  name: 'Cristian Bolaños',
  fullName: 'Cristian Alexander Bolaños Cabrera',
  city: 'Cali',
  region: 'Valle del Cauca',
  country: 'CO',
  email: 'cristianbolanos316@gmail.com',
  /** Número en formato internacional sin "+" ni espacios (lo usa wa.me). */
  whatsappNumber: '573167341074',
  socials: {
    linkedin: 'https://www.linkedin.com/in/cristianbola%C3%B1os/',
    github: 'https://github.com/CristianBolanos',
  },
  /** Endpoint de Formspree que recibe el formulario de contacto. */
  formEndpoint: 'https://formspree.io/f/xeoqjyeo',
  cvPath: '/cv/cristian-bolanos-cv-ecommerce.pdf',
  defaultOgImage: '/og/default.png',
} as const;
