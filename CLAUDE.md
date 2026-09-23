# Reaction — site

Site de uma página (React + Vite), pré-renderizado no build (`scripts/prerender.js`). Alojado na Vercel como site estático (`vercel.json`), domínio `reaction.pt`.

## Qualidade do código

- Privilegiar a qualidade do código: simples, legível, bem tipado e consistente com o que já existe.
- Seguir as convenções do React: componentes funcionais, regras dos hooks, keys estáveis em listas, estado derivado calculado no render (não em `useEffect`), efeitos com cleanup e dependências corretas.
- TypeScript em modo estrito; evitar `any` e type assertions desnecessárias.
- Antes de dar uma alteração como concluída, correr e garantir que passam sem erros:
  - `npm run lint` (ESLint)
  - `npm run typecheck` (tsc)
  - `npm run build`

## Deploy

- Cada push para `main` publica automaticamente em produção na Vercel (build `npm run build`, output `dist`, definidos em `vercel.json`). A versão do Node é a das Settings do projeto na Vercel; manter igual à de `.node-version`.
- Build falhado não é publicado; rollback em Vercel → projeto → Deployments → Instant Rollback.
- `public/404.html` tem de existir: a Vercel serve-o com estado 404 para URLs inexistentes.
- Cache e cabeçalhos de segurança em `vercel.json` (`headers`).
- DNS do `reaction.pt` fica na Hostinger, partilhado com outra app da equipa (`api`, `app`). Só se mexe nos registos do `reaction.pt` e do `www`.

## Lembretes para o utilizador

Ao fazer alterações ao site, lembrar o utilizador de:

- Testar localmente antes do push: `npm run build && npm run preview`.
- Se for adicionada uma página nova, acrescentá-la a `public/sitemap.xml`.
- Se o conteúdo mudar de forma relevante, atualizar à mão o `<lastmod>` em `public/sitemap.xml`.
