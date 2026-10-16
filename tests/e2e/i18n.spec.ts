import { expect, test } from '@playwright/test';
import { ROUTES_EN, ROUTES_ES } from './routes';

test.describe('Idiomas (español por defecto e inglés)', () => {
  test('el sitio arranca en español', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es-CO');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Tu tienda online');
  });

  test('cada página tiene su equivalente en el otro idioma (hreflang)', async ({
    page,
    request,
  }) => {
    for (const [index, route] of ROUTES_ES.entries()) {
      await page.goto(route);
      const es = await page.locator('link[hreflang="es"]').getAttribute('href');
      const en = await page.locator('link[hreflang="en"]').getAttribute('href');
      const xDefault = await page.locator('link[hreflang="x-default"]').getAttribute('href');

      expect(new URL(en ?? '').pathname).toBe(ROUTES_EN[index]);
      expect(xDefault).toBe(es);
      const response = await request.get(ROUTES_EN[index] ?? '');
      expect(response.ok()).toBeTruthy();
    }
  });

  test('el selector lleva a la misma página en inglés y de vuelta', async ({ page }) => {
    await page.goto('/proyectos/soat-ya');
    await page.getByRole('link', { name: 'English' }).click();
    await expect(page).toHaveURL(/\/en\/projects\/soat-ya$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('SOAT Ya');
    await expect(page.getByRole('link', { name: 'English' })).toHaveAttribute(
      'aria-current',
      'true',
    );

    await page.getByRole('link', { name: 'Español' }).click();
    await expect(page).toHaveURL(/\/proyectos\/soat-ya$/);
  });

  test('la versión en inglés no mezcla textos en español en la navegación', async ({ page }) => {
    await page.goto('/en');
    await expect(page.locator('nav[aria-label="Main navigation"]')).toHaveCount(2);
    await expect(page.getByRole('link', { name: "Let's talk about your store" })).toBeVisible();
    const whatsapp = await page
      .getByRole('link', { name: "Let's talk about your store" })
      .getAttribute('href');
    expect(decodeURIComponent(whatsapp ?? '')).toContain('Hi Cristian');
  });

  test('el formulario en inglés envía el asunto en inglés', async ({ page }) => {
    let body = '';
    await page.route('https://formspree.io/**', async (route) => {
      body = route.request().postData() ?? '';
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    });
    await page.goto('/en/contact');
    await page.getByLabel('Name', { exact: true }).fill('Jane Doe');
    await page.getByLabel('Email', { exact: true }).fill('jane@company.com');
    await page.getByLabel('Message', { exact: true }).fill('We are hiring an e-commerce manager.');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Send message' }).click();
    await expect(page.getByRole('status')).toContainText('Thank you');
    expect(body).toContain('(EN)');
  });
});
