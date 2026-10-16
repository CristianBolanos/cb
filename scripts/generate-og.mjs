/**
 * Genera, a partir de la foto/logo (src/assets/cristian-avatar.webp):
 * - public/og/default.png (1200×630): imagen para compartir en redes.
 * - public/favicon.png (48×48, circular), public/favicon.ico (32×32) y public/apple-touch-icon.png (180×180).
 * Uso: pnpm og
 */
import { chromium } from '@playwright/test';
import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const publicDir = (file) => fileURLToPath(new URL(`../public/${file}`, import.meta.url));
const fontFile = fileURLToPath(
  import.meta
    .resolve('@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2'),
);
const font = (await readFile(fontFile)).toString('base64');
const avatarFile = fileURLToPath(new URL('../src/assets/cristian-avatar.webp', import.meta.url));
const avatar = (await sharp(avatarFile).resize(144, 144).png().toBuffer()).toString('base64');

const html = /* html */ `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><style>
  @font-face { font-family: Jakarta; src: url(data:font/woff2;base64,${font}) format('woff2'); font-weight: 200 800; }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; font-family: Jakarta, sans-serif; background: #fafaf9; color: #1c1917;
         display: flex; flex-direction: column; justify-content: space-between; padding: 72px 80px; position: relative; overflow: hidden; }
  .blob { position: absolute; right: -120px; top: -120px; width: 520px; height: 520px; border-radius: 50%; background: #ecfdf5; }
  .brand { display: flex; align-items: center; gap: 20px; position: relative; }
  .logo { width: 72px; height: 72px; border-radius: 50%; border: 3px solid #047857; object-fit: cover; }
  .name { font-size: 30px; font-weight: 700; }
  h1 { font-size: 64px; line-height: 1.05; font-weight: 800; letter-spacing: -2px; max-width: 900px; position: relative; }
  .foot { display: flex; gap: 14px; position: relative; }
  .chip { border: 2px solid #e7e5e4; border-radius: 999px; padding: 10px 22px; font-size: 24px; font-weight: 600; color: #57534e; background: #fff; }
  .chip.accent { background: #047857; color: #fff; border-color: #047857; }
</style></head><body>
  <div class="blob"></div>
  <div class="brand"><img class="logo" src="data:image/png;base64,${avatar}" alt=""><div class="name">Cristian Bolaños</div></div>
  <h1>Administrador de <span style="white-space:nowrap">E-commerce</span> que entiende la tecnología detrás de la tienda.</h1>
  <div class="foot"><span class="chip accent">Marketplaces</span><span class="chip">Tiendas online</span><span class="chip">Automatización</span><span class="chip">Cali, Colombia</span></div>
</body></html>`;

await mkdir(publicDir('og'), { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
const png = await page.screenshot({ type: 'png' });
await sharp(png).png({ compressionLevel: 9, palette: true }).toFile(publicDir('og/default.png'));
await browser.close();

await sharp(avatarFile).resize(180, 180).png().toFile(publicDir('apple-touch-icon.png'));

const circleMask = Buffer.from(
  '<svg width="48" height="48"><circle cx="24" cy="24" r="24"/></svg>',
);
await sharp(avatarFile)
  .resize(48, 48)
  .composite([{ input: circleMask, blend: 'dest-in' }])
  .png()
  .toFile(publicDir('favicon.png'));

// favicon.ico con un PNG de 32×32 incrustado (Safari y algunos lectores lo piden en la raíz).
const ico32 = await sharp(avatarFile)
  .resize(32, 32)
  .composite([
    {
      input: Buffer.from('<svg width="32" height="32"><circle cx="16" cy="16" r="16"/></svg>'),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reservado
header.writeUInt16LE(1, 2); // tipo: ícono
header.writeUInt16LE(1, 4); // una imagen
header.writeUInt8(32, 6); // ancho
header.writeUInt8(32, 7); // alto
header.writeUInt16LE(1, 10); // planos de color
header.writeUInt16LE(32, 12); // bits por píxel
header.writeUInt32LE(ico32.length, 14);
header.writeUInt32LE(22, 18); // posición de los datos
await writeFile(publicDir('favicon.ico'), Buffer.concat([header, ico32]));

console.log('✔ og/default.png, favicon.png, favicon.ico y apple-touch-icon.png en public/');
