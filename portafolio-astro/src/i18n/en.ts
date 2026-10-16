import type { Dictionary } from './es';

/** English UI copy. It must match the shape of es.ts (enforced by the Dictionary type). */
const en: Dictionary = {
  meta: {
    homeTitle: 'Cristian Bolaños | E-commerce Manager in Cali, Colombia',
    homeDescription:
      'E-commerce manager based in Cali, Colombia. I manage marketplace catalogs like Falabella, build online stores and landing pages, and automate orders and inventory.',
    titleSuffix: 'Cristian Bolaños',
    role: 'E-commerce Manager',
    ogImageAlt: 'Cristian Bolaños, E-commerce Manager',
  },
  whatsapp: {
    default:
      'Hi Cristian, I saw your portfolio and would like to talk about a project for my business.',
    recruiter: 'Hi Cristian, I saw your résumé and would like to talk about a job opportunity.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleTheme: 'Switch between light and dark mode',
    whatsappFab: 'Message on WhatsApp',
    breadcrumb: 'Breadcrumb',
    opensNewTab: '(opens in a new tab)',
    languageSwitcher: 'Language',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    cv: 'Résumé',
    contact: 'Contact',
    quote: 'Get a quote',
  },
  cta: {
    whatsapp: "Let's talk about your store",
    writeWhatsapp: 'Message on WhatsApp',
    recruiter: "I'm a recruiter: see résumé",
    viewCv: 'See full résumé',
    downloadCv: 'Download résumé (PDF, Spanish)',
    linkedin: 'LinkedIn',
    sendMessage: 'Send a message',
    viewDetails: 'See details',
    viewCase: 'See case',
    viewAllProjects: 'See all projects',
    viewDemo: 'View demo',
    viewCode: 'View code',
    quoteService: 'Get a quote for this service',
  },
  hero: {
    eyebrow: 'E-commerce Manager · Cali, Colombia',
    status: 'Available for projects and jobs',
    title: 'Your online store, well managed and ready to sell.',
    lead: "I'm Cristian Bolaños. I manage catalogs and marketplaces like Falabella, and I build the web tools your business needs to sell and ship without the hassle.",
    visual: {
      productCard: 'Product listing',
      checklist: ['Photos', 'Description', 'Specs', 'Price'],
      channelsTitle: 'Listed on',
      published: 'Live',
    },
  },
  trust: {
    title: 'Results and experience',
    stats: {
      channels: 'digital sales channels managed at the same time',
      onTime: 'of orders delivered on time in production',
      goals: 'of operational goals met in logistics',
      projects: 'web projects published',
    },
    toolsLabel: 'Experience with',
  },
  services: {
    eyebrow: 'Services',
    title: 'Sell more online and spend less time on operations',
    intro: 'Three ways I can help your business, from the catalog to the delivery.',
    includes: "What's included",
    idealFor: 'Ideal for',
    outcome: 'Outcome',
    pageTitle: 'E-commerce, online store and automation services',
    pageDescription:
      'Catalog and marketplace management, online stores and landing pages, and order and inventory automation with Google Sheets.',
    pageLead:
      'I take care of the digital side of your business so you can focus on selling: an up-to-date catalog, pages that convert and well-organized operations.',
  },
  featured: {
    eyebrow: 'Case studies',
    title: 'Work that speaks for itself',
    intro: 'Real marketplace experience and web projects you can try right now.',
  },
  process: {
    eyebrow: 'How I work',
    title: 'A clear process, no surprises',
    steps: [
      {
        title: 'Discovery',
        text: 'We talk about your business, your sales channels and your goals.',
      },
      {
        title: 'Proposal',
        text: 'I send you a plan with clear scope, timeline and price before we start.',
      },
      { title: 'Execution', text: 'I deliver in stages so you can see progress along the way.' },
      {
        title: 'Follow-up',
        text: 'We review the results together and I adjust whatever is needed.',
      },
    ],
  },
  recruiter: {
    eyebrow: 'For recruiters',
    title: 'Looking for an E-commerce Manager?',
    text: 'I have experience managing marketplace catalogs, inventory, shipping and sales KPIs. I can also build the web tools the team needs.',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What people I have worked with say',
  },
  faq: {
    eyebrow: 'FAQ',
    title: "Let's clear up your questions",
  },
  finalCta: {
    title: 'Ready for your store to sell more?',
    text: "Tell me what you need and I'll get back to you with a clear proposal.",
  },
  projects: {
    pageTitle: 'E-commerce projects and case studies',
    pageDescription:
      'Case studies on marketplace management, online stores, landing pages and order automation by Cristian Bolaños.',
    pageLead:
      'Real work for companies and demo projects you can try. Each case explains the problem, the solution and the result.',
    filterLabel: 'Filter by type',
    all: 'All',
    labTitle: 'Lab',
    labIntro: 'Practice projects I learned from and keep learning from.',
    kind: { demo: 'Demo project', real: 'Real work' },
    categories: {
      ecommerce: 'E-commerce',
      automatizacion: 'Automation',
      landing: 'Landing page',
      web: 'Website',
      laboratorio: 'Lab',
    },
    problem: 'The challenge',
    solution: 'The solution',
    result: 'The result',
    highlights: 'Key features',
    idealFor: 'Ideal for',
    stack: 'Tools',
    aiTools: 'Built with AI assistance',
    gallery: 'More images',
    ctaTitle: 'Want something like this for your business?',
    ctaText: 'I adapt it to your brand and the way you work.',
    ctaMessage: (title: string) =>
      `Hi Cristian, I saw your project "${title}" and I'd like something similar for my business.`,
    relatedService: 'Related service',
    more: 'More projects',
  },
  cv: {
    pageTitle: 'Résumé: E-commerce Manager',
    pageDescription:
      "Cristian Bolaños's résumé: experience in marketplace management, product catalogs, inventory and web development. Download the PDF.",
    profile: 'Profile',
    roles: "Roles I'm looking for",
    experience: 'Experience',
    areas: {
      ecommerce: 'E-commerce and sales',
      operaciones: 'Operations and logistics',
      tecnologia: 'Technology and marketing',
    },
    responsibilities: 'Responsibilities',
    achievements: 'Achievements',
    skills: 'Skills',
    education: 'Education',
    courses: 'Additional training',
    contactRecruiter: 'Contact',
    avatarAlt: 'Photo of Cristian Bolaños',
  },
  contact: {
    pageTitle: 'Contact',
    pageDescription:
      'Get in touch with Cristian Bolaños to get a quote for an e-commerce project or to discuss a job opportunity.',
    title: "Let's talk",
    lead: "Tell me what you need. For a project, I'll reply with a proposal; for a job opportunity, we'll set up a conversation.",
    directTitle: 'Direct contact',
    directText: 'For a faster reply, message me on WhatsApp.',
    emailLabel: 'Email',
    form: {
      name: 'Name',
      email: 'Email',
      profile: 'Who are you?',
      profileBusiness: 'I have a business',
      profileRecruiter: "I'm a recruiter or company",
      service: 'What do you need?',
      serviceOptions: {
        'gestion-ecommerce': 'E-commerce and marketplace management',
        'tiendas-landing': 'Online store or landing page',
        automatizacion: 'Order and inventory automation',
        empleo: 'Job opportunity',
        otro: 'Other',
      },
      budget: 'Approximate budget (optional)',
      budgetOptions: ["I don't know yet", 'Under USD 250', 'USD 250 – 750', 'Over USD 750'],
      message: 'Message',
      messagePlaceholder: 'Tell me about your business or the opportunity…',
      consent: 'I authorize the processing of my data to answer this request, according to the',
      consentLink: 'privacy policy',
      submit: 'Send message',
      sending: 'Sending…',
      success: "Thank you! I got your message and I'll get back to you soon.",
      error: "The message couldn't be sent. Please try again or message me on WhatsApp.",
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email, for example name@company.com.',
      tooShort: 'Write at least 10 characters.',
      consentRequired: 'I need your authorization to reply.',
      subject: 'New message from the portfolio (EN)',
    },
  },
  privacy: {
    pageTitle: 'Privacy policy',
    pageDescription:
      "How personal data sent through Cristian Bolaños's website is handled (Colombian Law 1581 of 2012).",
  },
  notFound: {
    pageTitle: 'Page not found',
    title: "I couldn't find this page",
    text: 'The link may have changed. These pages might help:',
  },
  footer: {
    tagline:
      'E-commerce management, online stores and web tools for businesses that want to sell more.',
    navigation: 'Navigation',
    contact: 'Contact',
    privacy: 'Privacy policy',
    rights: 'All rights reserved.',
  },
};

export default en;
