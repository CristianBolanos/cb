import { defineConfig, devices } from '@playwright/test';

// Puerto propio y dirección IPv4 explícita: en Windows `localhost` puede resolver a ::1 o 127.0.0.1 según el navegador.
const PORT = 4330;
const HOST = '127.0.0.1';

/**
 * Las pruebas corren contra el sitio compilado (pnpm build) servido con `astro preview`.
 * Por defecto: Chrome escritorio y Chrome móvil. Con ALL_BROWSERS=1 (o en CI) también Firefox y Safari (WebKit).
 */
const allBrowsers = Boolean(process.env.CI || process.env.ALL_BROWSERS);

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: `http://${HOST}:${PORT}`,
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
    command: `pnpm preview --port ${PORT} --host ${HOST}`,
    url: `http://${HOST}:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
