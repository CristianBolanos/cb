import type { Lang } from '@/i18n';

const MONTHS: Record<Lang, string[]> = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const PRESENT: Record<Lang, string> = { es: 'actualidad', en: 'present' };

/** "2025-06" → "jun 2025" */
export function formatYearMonth(value: string, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  return `${MONTHS[lang][(month ?? 1) - 1]} ${year}`;
}

/** Periodo legible: "jun 2025 – sep 2026", "ago 2024 – actualidad" o "nov 2025". */
export function formatPeriod(start: string, end: string | null, lang: Lang): string {
  if (end === start) return formatYearMonth(start, lang);
  return `${formatYearMonth(start, lang)} – ${end ? formatYearMonth(end, lang) : PRESENT[lang]}`;
}
