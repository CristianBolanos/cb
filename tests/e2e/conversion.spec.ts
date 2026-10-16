import { expect, test } from '@playwright/test';
import { WHATSAPP_PREFIX } from './routes';

test.describe('Llamados a la acción', () => {
  test('el CTA principal abre WhatsApp con un mensaje prellenado', async ({ page }) => {
    await page.goto('/');
    const cta = page.getByRole('link', { name: 'Hablemos de tu tienda' });
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute(
      'href',
      new RegExp(`^${WHATSAPP_PREFIX.replace(/[.?]/g, '\\$&')}.+`),
    );
    await expect(cta).toHaveAttribute('target', '_blank');
    await expect(cta).toHaveAttribute('rel', /noopener/);
  });

  test('el botón flotante de WhatsApp está en todas las páginas', async ({ page }) => {
    for (const route of ['/', '/cv', '/proyectos/soat-ya']) {
      await page.goto(route);
      const fab = page.getByRole('link', { name: 'Escribir por WhatsApp' }).last();
      await expect(fab).toBeVisible();
      expect(await fab.getAttribute('href')).toContain(WHATSAPP_PREFIX);
    }
  });

  test('cada caso usa un mensaje de WhatsApp que menciona el proyecto', async ({ page }) => {
    await page.goto('/proyectos/sistema-pedidos');
    const href = await page
      .getByRole('link', { name: 'Escribir por WhatsApp' })
      .first()
      .getAttribute('href');
    expect(decodeURIComponent(href ?? '')).toContain('Sistema de gestión de pedidos y despachos');
  });

  test('el CTA de reclutadores lleva al CV', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Soy reclutador: ver CV' }).click();
    await expect(page).toHaveURL(/\/cv$/);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Cristian Bolaños');
  });

  test('el CV en PDF se puede descargar', async ({ page, request }) => {
    await page.goto('/cv');
    const link = page.getByRole('link', { name: 'Descargar CV (PDF)' }).first();
    await expect(link).toHaveAttribute('download', '');
    const response = await request.get((await link.getAttribute('href')) ?? '');
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('pdf');
  });
});
