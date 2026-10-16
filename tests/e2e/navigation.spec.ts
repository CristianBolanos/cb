import { expect, test } from '@playwright/test';
import { withBase } from './base';

test.describe('Navegación', () => {
  test('el menú principal lleva a cada sección (escritorio)', async ({ page, isMobile }) => {
    test.skip(isMobile, 'En móvil se prueba el menú desplegable');
    await page.goto(withBase('/'));
    const nav = page.getByRole('navigation', { name: 'Navegación principal' }).first();

    for (const [label, path] of [
      ['Servicios', '/servicios'],
      ['Proyectos', '/proyectos'],
      ['CV', '/cv'],
      ['Contacto', '/contacto'],
    ] as const) {
      await nav.getByRole('link', { name: label, exact: true }).click();
      await expect(page).toHaveURL(withBase(path));
      await expect(nav.getByRole('link', { name: label, exact: true })).toHaveAttribute(
        'aria-current',
        'page',
      );
    }
  });

  test('el menú móvil abre, cierra y navega', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Solo aplica en móvil');
    await page.goto(withBase('/'));
    const toggle = page.getByRole('button', { name: 'Abrir menú' });
    const menu = page.locator('#mobile-menu');

    await expect(menu).toBeHidden();
    await toggle.click();
    await expect(menu).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );

    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();

    await page.getByRole('button', { name: 'Abrir menú' }).click();
    await menu.getByRole('link', { name: 'Proyectos' }).click();
    await expect(page).toHaveURL(withBase('/proyectos'));
  });

  test('el enlace "Saltar al contenido" lleva al contenido principal', async ({
    page,
    isMobile,
    browserName,
  }) => {
    test.skip(isMobile, 'Navegación por teclado');
    // Safari solo enfoca enlaces con Tab si el usuario activa esa opción del sistema.
    test.skip(browserName === 'webkit', 'Safari no enfoca enlaces con Tab por defecto');
    await page.goto(withBase('/'));
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Saltar al contenido' });
    await expect(skip).toBeFocused();
    await skip.press('Enter');
    await expect(page).toHaveURL(/#contenido$/);
  });

  test('las tarjetas de proyecto abren el caso', async ({ page }) => {
    await page.goto(withBase('/proyectos'));
    await page.getByRole('link', { name: 'Tienda virtual de ropa' }).click();
    await expect(page).toHaveURL(withBase('/proyectos/tienda-virtual'));
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Tienda virtual de ropa');
  });

  test('el filtro de proyectos muestra solo la categoría elegida', async ({ page }) => {
    await page.goto(withBase('/proyectos'));
    const cards = page.locator('.projects-filter li[data-category]');
    const total = await cards.count();

    await page.getByText('Automatización', { exact: true }).first().click();
    await expect(page.locator('.projects-filter li[data-category]:visible')).toHaveCount(1);

    await page.getByText('Todos', { exact: true }).click();
    await expect(page.locator('.projects-filter li[data-category]:visible')).toHaveCount(total);
  });
});
