import { expect, test } from '@playwright/test';

const theme = (page: import('@playwright/test').Page) =>
  page.evaluate(() => document.documentElement.dataset.theme);

test.describe('Modo claro y oscuro', () => {
  test('sigue la preferencia del sistema cuando no hay elección guardada', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');
    expect(await theme(page)).toBe('dark');

    await page.emulateMedia({ colorScheme: 'light' });
    await expect.poll(() => theme(page)).toBe('light');
  });

  test('arranca en claro si el sistema no indica preferencia', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'no-preference' as 'light' });
    await page.goto('/');
    expect(await theme(page)).toBe('light');
  });

  test('la elección del usuario se guarda y tiene prioridad sobre el sistema', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
    const toggle = page.getByRole('button', { name: 'Cambiar entre modo claro y oscuro' });

    await toggle.click();
    expect(await theme(page)).toBe('dark');
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');

    await page.reload();
    expect(await theme(page)).toBe('dark');

    // Un cambio del sistema ya no debe pisar la elección guardada.
    await page.emulateMedia({ colorScheme: 'light' });
    expect(await theme(page)).toBe('dark');
  });
});
