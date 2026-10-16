# Portafolio de Cristian Bolaños

Sitio web profesional de **Cristian Bolaños, Administrador de E-commerce**, publicado en <https://cristianbolanos.github.io/cb/>. Tiene dos recorridos con una misma identidad:

- **Clientes** (negocios): servicios, casos y contacto por WhatsApp o formulario.
- **Reclutadores**: CV en línea, descarga del PDF y contacto.

Español por defecto (`/`) e inglés (`/en`). La especificación completa está en el brief del proyecto, un documento interno que no se publica en este repositorio.

## Requisitos

- Node.js 22.22 o superior
- **pnpm 10** (obligatorio; `npm` y `yarn` están bloqueados con `only-allow`)

```bash
corepack enable
pnpm install
```

## Comandos

| Comando           | Qué hace                                                                         |
| ----------------- | -------------------------------------------------------------------------------- |
| `pnpm dev`        | Servidor de desarrollo en `http://localhost:4321`                                |
| `pnpm build`      | Compila el sitio estático en `dist/`                                             |
| `pnpm preview`    | Sirve `dist/` para revisarlo como en producción                                  |
| `pnpm check`      | Verifica tipos y contenido (`astro check`)                                       |
| `pnpm lint`       | ESLint (incluye reglas de accesibilidad)                                         |
| `pnpm format`     | Formatea con Prettier (`format:check` solo verifica)                             |
| `pnpm test:e2e`   | Pruebas Playwright + axe sobre el build (`ALL_BROWSERS=1` para Firefox y Safari) |
| `pnpm lighthouse` | Lighthouse CI con los umbrales del brief                                         |
| `pnpm verify`     | Formato, lint, tipos, build y pruebas en un solo paso                            |
| `pnpm covers`     | Captura portadas 16:10 de las demos publicadas                                   |
| `pnpm og`         | Regenera la imagen para redes, el favicon y el ícono de iOS desde la foto        |

> Las pruebas corren contra el build: ejecuta `pnpm build` antes de `pnpm test:e2e`.
> La primera vez instala los navegadores con `pnpm exec playwright install`.

## Estructura

```
src/
  assets/            Foto/logo y portadas de proyectos (Astro las optimiza a AVIF/WebP)
  components/        ui/ (botones, badges) · layout/ (header, footer, idioma, tema) · sections/ (home)
                     projects/ · contact/ · seo/
  config/site.ts     Datos de contacto, redes, endpoint del formulario y ruta del CV
  content/           Contenido por idioma: projects/, experience/, services/, faq/, testimonials/ (es/ y en/)
                     y profile/es.json, profile/en.json
  content.config.ts  Esquemas (Zod) de cada colección
  i18n/              es.ts y en.ts (textos de la interfaz) · routes.ts (rutas traducidas)
  lib/               Helpers: contenido, SEO (JSON-LD), fechas, URLs, WhatsApp
  scripts/           JavaScript del navegador: formulario y analítica
  views/             Páginas completas, compartidas por ambos idiomas
  pages/             Rutas en español y en/ en inglés (solo importan su vista)
public/              CV en PDF, favicon, imagen OG y _headers (cabeceras de seguridad)
tests/e2e/           Pruebas Playwright
.github/workflows/   Pruebas y publicación en GitHub Pages (GitHub Actions)
```

## Tareas frecuentes

### Agregar un proyecto

1. Guarda la portada en `src/assets/projects/<slug>.webp` (16:10). Si está publicada, puedes capturarla con `pnpm covers <slug>` tras añadir su URL en `scripts/capture-covers.mjs`.
2. Crea `src/content/projects/es/<slug>.md` y `src/content/projects/en/<slug>.md` con el mismo nombre. Copia uno existente como plantilla: los campos están validados por el esquema y `pnpm check` avisa si falta alguno.
3. Usa `kind: real` para trabajo hecho para una empresa y `kind: demo` para proyectos de ejemplo. Con `featured: true` aparece en el inicio (se muestran los 3 primeros según `order`).

### Agregar un testimonio

Crea `src/content/testimonials/es/<nombre>.json` (y su versión en `en/`). La sección aparece sola cuando hay al menos uno. Ver `src/content/testimonials/README.md`.

### Cambiar textos

- Textos de la interfaz: `src/i18n/es.ts` y `src/i18n/en.ts`. TypeScript avisa si a un idioma le falta un texto.
- Servicios, preguntas frecuentes, experiencia y perfil: archivos JSON en `src/content/`.
- Datos de contacto: `src/config/site.ts`.

### Agregar otro idioma

1. Crea `src/i18n/<código>.ts` con la misma forma que `es.ts` y regístralo en `src/i18n/index.ts` (`languages`, `dictionaries`, `locales`).
2. Agrega sus rutas en `src/i18n/routes.ts` y en `astro.config.mjs` (`i18n.locales`).
3. Crea `src/pages/<código>/…` (copia `src/pages/en/`) y el contenido en `src/content/*/<código>/`.

## Despliegue

El sitio se publica en **GitHub Pages** (<https://cristianbolanos.github.io/cb/>) con GitHub Actions. No se sube `dist/` a mano: basta con hacer push a `main`.

El workflow [`.github/workflows/portafolio.yml`](.github/workflows/portafolio.yml) corre en cada push a `main` y en cada pull request:

1. **Calidad**: auditoría de dependencias de producción, formato, lint, tipos, build, pruebas E2E con axe (Chrome, Firefox y Safari) y Lighthouse. Compila con `BASE_PATH=/` porque las pruebas recorren el sitio desde la raíz.
2. **Publicación** (solo en `main` y solo si la etapa 1 pasa): vuelve a compilar con `SITE_URL=https://cristianbolanos.github.io` y `BASE_PATH=/cb`, comprueba que todas las rutas internas empiecen por `/cb` y publica `dist/` en Pages.

Si algo falla, el sitio publicado no cambia. Cada ejecución se ve en la pestaña **Actions** del repositorio; los reportes de Playwright y Lighthouse quedan 14 días en el artefacto `reportes`. Para publicar de nuevo sin cambios: Actions → Portafolio (Astro) → **Run workflow**.

**Requisito en GitHub** (una sola vez): Settings → Pages → Source: **GitHub Actions**. Con «Deploy from a branch» el workflow no puede publicar.

### Variables de entorno

Ver `.env.example`:

- `SITE_URL`: URL pública sin barra final (canonical, sitemap, Open Graph).
- `BASE_PATH`: `/cb` en GitHub Pages dentro del repositorio `cb`; `/` con dominio propio.

En la CI se cambian sin tocar el workflow, con variables del repositorio (Settings → Secrets and variables → Actions → Variables). Por ejemplo, con dominio propio: `SITE_URL=https://tudominio.com` y `BASE_PATH=/`.

Para revisar en local el sitio tal como queda en Pages (PowerShell):

```powershell
$env:SITE_URL = 'https://cristianbolanos.github.io'; $env:BASE_PATH = '/cb'
pnpm build; pnpm preview   # http://localhost:4321/cb/
Remove-Item Env:SITE_URL, Env:BASE_PATH   # las pruebas esperan la raíz: vuelve a compilar sin base
```

> En Git Bash, `BASE_PATH=/cb` se convierte en una ruta de Windows (`C:/Program Files/Git/cb`) y el build falla. Antepón `MSYS_NO_PATHCONV=1` al comando.

### Cabeceras de seguridad

GitHub Pages ignora `public/_headers` (HSTS, `frame-ancestors`, `nosniff`, etc.). Para aplicarlas hace falta Cloudflare Pages o Netlify con dominio propio (comando `pnpm build`, carpeta de salida `dist`).

## Seguridad

- CSP con hashes generada por Astro (`security.csp`) en cada página. Sin scripts ni fuentes de terceros: todo está autoalojado.
- Formulario: validación en el navegador y en Formspree, campo trampa contra bots y casilla de autorización de datos (Ley 1581 de 2012).
- `pnpm audit --prod` en la CI. Las alertas de `pnpm audit` sin `--prod` vienen de `@lhci/cli`, una herramienta de desarrollo que no llega al sitio.

## Pendientes de contenido

- [ ] Foto profesional (hoy se usa la del sitio anterior en el logo, el favicon y el CV)
- [ ] Cifras del caso Gema (la portada ya es la pieza del catálogo digital)
- [ ] 2–3 testimonios
- [ ] Precios o rangos por servicio; confirmar los rangos de presupuesto del formulario (COP en español, USD en inglés)
- [ ] CV en inglés (la versión en inglés ofrece el PDF en español)
- [ ] **Quitar del CV público los nombres y teléfonos de los jefes anteriores** (datos de terceros)
- [ ] Revisar fechas que se solapan (SYSHELP, Gema, Visión y Marketing) y la empresa del cargo "Auxiliar de operaciones (nov. 2025)"
- [ ] Demo de la página administrable: infinityfree no carga; conviene moverla a otro hosting
- [ ] Elegir proveedor de analítica (el código ya registra `click_whatsapp`, `submit_form`, `download_cv`, `view_cv`, `click_demo`, `switch_language`)
- [ ] Dominio propio y `SITE_URL`
