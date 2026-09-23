// Injeta no dist/index.html o HTML da página renderizado no servidor, para que
// motores de pesquisa e pré-visualizações de links vejam o conteúdo sem JavaScript.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = `${root}dist/index.html`;
const ssrDir = `${root}dist-ssr`;

const { render } = await import(`${ssrDir}/entry-server.js`);

const template = await readFile(indexPath, 'utf8');
const placeholder = '<div id="root"></div>';

if (!template.includes(placeholder)) {
  throw new Error(`${placeholder} não encontrado em dist/index.html`);
}

await writeFile(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });

console.log('Pré-renderização concluída: dist/index.html');
