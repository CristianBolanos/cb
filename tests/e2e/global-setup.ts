import { readFileSync } from 'node:fs';
import { BASE } from './base';

/**
 * Si dist/ se compiló con otra BASE_PATH, cada página carga sin estilos ni scripts y fallan todas
 * las pruebas a la vez. Mejor detenerse con un solo error que diga qué pasa.
 */
export default function checkBuildBase() {
  const html = readFileSync(new URL('../../dist/index.html', import.meta.url), 'utf8');
  if (!html.includes(`"${BASE}/_astro/`)) {
    throw new Error(
      `dist/ no se compiló con BASE_PATH=${BASE || '/'}. Compila y prueba con la misma base (ver README, Despliegue).`,
    );
  }
}
