// Falha o build se alguma página em dist/ ainda tiver campos por preencher,
// como [DENOMINAÇÃO SOCIAL] ou [NIF], para não serem publicados por engano.
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const placeholder = /\[[A-ZÀ-Ú][A-ZÀ-Ú ]*\]/g;

const htmlFiles = (await readdir(distDir, { recursive: true })).filter((file) =>
  file.endsWith('.html'),
);

const problems = [];

for (const file of htmlFiles) {
  const matches = (await readFile(`${distDir}${file}`, 'utf8')).match(placeholder);

  if (matches) {
    problems.push(`  dist/${file}: ${[...new Set(matches)].join(', ')}`);
  }
}

if (problems.length > 0) {
  console.error(`Campos por preencher encontrados:\n${problems.join('\n')}`);
  process.exit(1);
}

console.log('Sem campos por preencher.');
