/**
 * Captura portadas 16:10 de las demos publicadas y las guarda en src/assets/projects.
 * Uso: pnpm covers            → todas
 *      pnpm covers tienda     → solo las que coincidan con el texto
 */
import { chromium } from '@playwright/test';
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const OUT_DIR = new URL('../src/assets/projects/', import.meta.url);

const demos = [
  { file: 'tienda-virtual', url: 'https://cristianbolanos.github.io/shop/' },
  { file: 'sistema-pedidos', url: 'https://cristianbolanos.github.io/Distribuidora-Demo/demo/' },
  { file: 'landing-restaurante', url: 'https://cristianbolanos.github.io/restaurante/' },
  { file: 'soat-ya', url: 'https://cristianbolanos.github.io/soat/' },
  { file: 'landing-corporativa', url: 'https://cristianbolanos.github.io/corporativa/' },
  { file: 'snake-game', url: 'https://cristianbolanos.github.io/SnakeGame/' },
  { file: 'primer-portafolio', url: 'https://cristianbolanos.github.io/portafolio/' },
  { file: 'web-administrable', url: 'https://constructoraxyz.infinityfree.me/' },
];

const filter = process.argv[2];
const selected = filter ? demos.filter((d) => d.file.includes(filter)) : demos;

await mkdir(OUT_DIR, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

for (const { file, url } of selected) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45_000 });
    await page.waitForTimeout(1500);
    const png = await page.screenshot({ type: 'png' });
    await sharp(png)
      .webp({ quality: 80 })
      .toFile(fileURLToPath(new URL(`${file}.webp`, OUT_DIR)));
    console.log(`✔ ${file}`);
  } catch (error) {
    console.error(`✘ ${file}: ${error instanceof Error ? error.message : error}`);
  }
}

await browser.close();
