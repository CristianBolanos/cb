import { expect, test } from '@playwright/test';
import { withBase } from './base';
import { ROUTES } from './routes';

test.describe('Todas las páginas', () => {
  for (const route of ROUTES) {
    test(`${route} carga sin errores y tiene SEO básico`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });

      const response = await page.goto(withBase(route));
      expect(response?.status()).toBe(200);

      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page).toHaveTitle(/Cristian Bolaños/);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.{50,}/);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https?:\/\//);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        'content',
        /^https?:\/\//,
      );
      // La imagen para compartir debe existir. Su URL apunta al dominio publicado, así que se pide
      // la misma ruta al servidor de pruebas.
      const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
      const ogResponse = await page.request.get(new URL(ogImage ?? '').pathname);
      expect(ogResponse.status(), `og:image ${ogImage}`).toBe(200);
      await expect(page.locator('meta[http-equiv="content-security-policy"]')).toHaveCount(1);

      // Ninguna página debe desbordar horizontalmente.
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);

      expect(errors).toEqual([]);
    });
  }

  test('los títulos de las páginas son únicos', async ({ page }) => {
    const titles = new Set<string>();
    for (const route of ROUTES) {
      await page.goto(withBase(route));
      titles.add(await page.title());
    }
    expect(titles.size).toBe(ROUTES.length);
  });

  test('una ruta inexistente muestra la página 404', async ({ page }) => {
    const response = await page.goto(withBase('/esta-ruta-no-existe'));
    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('No encontré esta página');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  });

  test('robots.txt y sitemap existen', async ({ request }) => {
    const robots = await request.get(withBase('/robots.txt'));
    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toContain('Sitemap:');

    const sitemap = await request.get(withBase('/sitemap-index.xml'));
    expect(sitemap.ok()).toBeTruthy();
  });
});

test.describe('Celulares angostos', () => {
  // 360 px es el ancho de Android más común. A 412 px (Pixel 7) las etiquetas largas todavía caben.
  test.use({ viewport: { width: 360, height: 780 } });

  test('ninguna página se desborda a 360 px', async ({ page }) => {
    const overflowing: string[] = [];
    for (const route of ROUTES) {
      await page.goto(withBase(route));
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      if (overflow > 0) overflowing.push(`${route} (+${overflow} px)`);
    }
    expect(overflowing).toEqual([]);
  });
});
