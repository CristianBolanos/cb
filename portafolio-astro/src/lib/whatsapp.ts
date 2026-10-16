import { SITE } from '@/config/site';

/** Enlace de WhatsApp con un mensaje prellenado (los mensajes viven en el diccionario de cada idioma). */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
