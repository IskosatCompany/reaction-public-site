# Reaction — site

Site de uma página (React + Vite), pré-renderizado no build (`scripts/prerender.js`). Alojado num Cloudflare Worker só com ficheiros estáticos (`wrangler.jsonc`), domínio `reaction.pt`.

## Qualidade do código

- Privilegiar a qualidade do código: simples, legível, bem tipado e consistente com o que já existe.
- Seguir as convenções do React: componentes funcionais, regras dos hooks, keys estáveis em listas, estado derivado calculado no render (não em `useEffect`), efeitos com cleanup e dependências corretas.
- TypeScript em modo estrito; evitar `any` e type assertions desnecessárias.
- Antes de dar uma alteração como concluída, correr e garantir que passam sem erros:
  - `npm run lint` (ESLint)
  - `npm run typecheck` (tsc)
  - `npm run build`

## Deploy

- Cada push para `main` publica automaticamente em produção (build `npm run build`, output `dist`, Node definido em `.node-version`).
- O comando de deploy no Cloudflare é `npx wrangler deploy`, que publica o `dist` conforme o `wrangler.jsonc`. Sem esse ficheiro, o wrangler reconfigura o projeto sozinho e o build falha.
- Build falhado não é publicado; rollback em Workers & Pages → reaction → Deployments.
- `public/404.html` tem de existir e o `wrangler.jsonc` tem de manter `not_found_handling: "404-page"`: caso contrário, qualquer URL devolve a homepage com 200.
- Cache e cabeçalhos de segurança em `public/_headers`.

## Lembretes para o utilizador

Ao fazer alterações ao site, lembrar o utilizador de:

- Testar localmente antes do push: `npm run build && npm run preview`.
- Se for adicionada uma página nova, acrescentá-la a `public/sitemap.xml`.
- Se o conteúdo mudar de forma relevante, atualizar à mão o `<lastmod>` em `public/sitemap.xml`.
