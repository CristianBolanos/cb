import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { withBase } from './base';
import { ROUTES } from './routes';

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

test.describe('Accesibilidad (axe, WCAG 2.2 AA)', () => {
  for (const scheme of ['light', 'dark'] as const) {
    for (const route of ROUTES) {
      test(`${route} en modo ${scheme === 'light' ? 'claro' : 'oscuro'}`, async ({ page }) => {
        await page.emulateMedia({ colorScheme: scheme, reducedMotion: 'reduce' });
        await page.goto(withBase(route));
        const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
        const summary = results.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          nodes: v.nodes.slice(0, 3).map((n) => n.target.join(' ')),
        }));
        expect(summary).toEqual([]);
      });
    }
  }
});
