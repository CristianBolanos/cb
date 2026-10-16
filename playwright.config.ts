import { defineConfig, devices } from '@playwright/test';
import { BASE } from './tests/e2e/base';

// Puerto propio y dirección IPv4 explícita: en Windows `localhost` puede resolver a ::1 o 127.0.0.1 según el navegador.
const PORT = 4330;
const HOST = '127.0.0.1';
// Raíz del sitio servido, con la misma base del build (BASE_PATH): http://127.0.0.1:4330/cb/ en GitHub Pages.
const SITE_ROOT = `http://${HOST}:${PORT}${BASE}/`;

/**
 * Las pruebas corren contra el sitio compilado (pnpm build) servido con `astro preview`, con la misma BASE_PATH.
 * Por defecto: Chrome escritorio y Chrome móvil. Con ALL_BROWSERS=1 (o en CI) también Firefox y Safari (WebKit).
 */
const allBrowsers = Boolean(process.env.CI || process.env.ALL_BROWSERS);

export default defineConfig({
  testDir: './tests/e2e',
  globalSetup: './tests/e2e/global-setup.ts',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: SITE_ROOT,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 7'] } },
    ...(allBrowsers
      ? [
          { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
          { name: 'safari', use: { ...devices['Desktop Safari'] } },
          { name: 'mobile-safari', use: { ...devices['iPhone 14'] } },
        ]
      : []),
  ],
  webServer: {
    // --ignore-lock: Astro admite una sola vista previa por proyecto; esta es de las pruebas y no choca con otra abierta.
    command: `pnpm preview --port ${PORT} --host ${HOST} --ignore-lock`,
    url: SITE_ROOT,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
