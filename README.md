# Reaction — Site institucional

Landing page da **Reaction — Centro de Reabilitação e Performance** (Coimbra).

## Stack

- **React 19** + **TypeScript** (strict)
- **Vite 7** (dev server + build)
- **CSS Modules** com design tokens em variáveis CSS
- **ESLint** (flat config) + **Prettier**
- **Playwright** para testes end-to-end (Chromium desktop + mobile)

## Scripts

```bash
npm install      # instalar dependências
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # typecheck + build de produção para dist/
npm run preview  # servir o build de produção
npm run lint     # ESLint
npm run typecheck
npm run format   # Prettier

npm run test:e2e         # suite Playwright contra o build de produção
npm run test:e2e:ui      # modo interactivo
npm run test:e2e:report  # abrir o último relatório HTML
```

Antes da primeira execução dos testes: `npx playwright install chromium`.

## Estrutura

```
src/
├── assets/          Imagens web-ready (processadas e versionadas pelo Vite)
│   └── team/        Retratos da equipa (1000px, ~50KB cada)
├── components/
│   ├── layout/      Estrutura da página: Container, Section, Header, Footer
│   └── ui/          Blocos reutilizáveis: Button, Carousel, Eyebrow,
│                    SectionHeading, SocialLinks, icons
├── data/            Conteúdo do site (textos, serviços, equipa, contactos)
├── hooks/           useCarousel, useDisclosure
├── sections/        Secções da página: Hero, Positioning, About, Services,
│                    Team, Facilities, Contact
├── styles/          tokens.css, reset.css, global.css
├── types/           Tipos partilhados do domínio
├── utils/           Helpers (cx)
├── App.tsx          Composição das secções
└── main.tsx         Entry point

e2e/                 Testes Playwright + fixtures com os valores esperados
raw-assets/team/     Fotografias originais da sessão (3868x5794, ~11MB cada)
```

`raw-assets/` guarda os originais sem tratamento (~300MB). Está no `.gitignore`:
existe só localmente e não vai para o repositório.

### Convenções

- **Um componente por pasta**, com `Componente.tsx`, `Componente.module.css` e `index.ts`.
  Cada pasta expõe a sua API pública pelo `index.ts`; os imports usam essa barrel, nunca
  o ficheiro interno.
- **Alias `@/`** aponta para `src/` (configurado em `vite.config.ts` e `tsconfig.app.json`).
- **Conteúdo fora dos componentes**: textos, listas de serviços, equipa e contactos vivem
  em `src/data/`, tipados por `src/types/`. Alterar conteúdo não implica tocar em JSX.
- **`components/` vs `sections/`**: `components/` é reutilizável e agnóstico de conteúdo;
  `sections/` são os blocos concretos da página, que compõem componentes com dados.
- **Estilos**: nada de cores ou tipografia hardcoded nos módulos CSS — usar os tokens de
  `src/styles/tokens.css`.

## Testes

A suite corre contra o **build de produção** (`vite preview`), em dois projectos:
`desktop` (1280x900) e `mobile` (Pixel 7). O `webServer` do Playwright trata do
build e do arranque do servidor.

| Ficheiro | Cobertura |
| --- | --- |
| `e2e/home.spec.ts` | Metadados, hero, ordem das secções, 9 serviços, galeria, rodapé, consola limpa |
| `e2e/navigation.spec.ts` | Links do header, âncoras, menu mobile (abrir/fechar/`aria-expanded`) |
| `e2e/carousel.spec.ts` | Ambos os carrosséis: setas, indicadores, wrap-around, `inert`, retratos |
| `e2e/contact.spec.ts` | `tel:`/`mailto:`/Maps, redes sociais, iframe do mapa |
| `e2e/accessibility.spec.ts` | Landmarks, um só h1, ordem de cabeçalhos, alt, nomes acessíveis, `rel=noopener` |

Os valores esperados vivem em `e2e/fixtures.ts`, duplicados face a `src/data` de
propósito: um teste não deve passar só por partilhar a constante com o código.

## Conteúdo por confirmar

`src/data/team.ts` tem os **retratos definitivos** dos 8 membros, mas apenas o Sérgio
Santos tem função e bio. Os restantes estão com `PENDING_ROLE` e só o primeiro nome —
faltam apelidos e especialidades.

Os originais em `raw-assets/team/` chamam-se `R_Beatriz*` / `R_TBeatriz_1`, mas
tratam-se todos da **Rita** — nomes dados na sessão fotográfica, ainda por corrigir.

Os links de Política de Privacidade e Condições Gerais em `src/data/site.ts` apontam para
`#` — falta o conteúdo legal.
