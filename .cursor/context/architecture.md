# Architecture

> Last updated: 2026-04-08
> Updated by: Brain workflow run

## Monorepo Structure

```
guidy/
├── apps/
│   ├── web/
│   │   ├── core/       @guidy/core   — Main product app (Rspack + React 19 + TS)
│   │   └── landing/    @guidy/landing — Public marketing site (Rspack + React 19 + TS)
│   ├── mobile/         Placeholder only (README.md)
│   └── server/         Placeholder only (README.md)
├── packages/
│   └── ds/             @guidy/ds — Design System (tokens, atoms, molecules)
├── tools/scripts/      Automation: audit.sh, dry-audit.sh, assemble-gh-pages.sh
├── docs/               Architecture docs (placeholder)
├── .cursor/
│   ├── rules/          14 rules (brain, copywriter, dead-code-auditor, design-system, devops, dry-auditor, monorepo, motion-design, product, qa, react-web, structure-auditor, web-quality-gate, web-roles)
│   ├── skills/         6 skills (brain, devops-pipeline, motion-design, project-architecture, react-web-app, web-workflow)
│   └── context/        7 knowledge areas (architecture, patterns, component-inventory, tech-debt, decisions, metrics, product)
```

## Workspace Packages (active)

| Package          | Path               | Description                                |
| ---------------- | ------------------ | ------------------------------------------ |
| `@guidy/core`    | `apps/web/core`    | Main product scaffold. Dev port 3000.      |
| `@guidy/landing` | `apps/web/landing` | Marketing landing page. Dev port 3001.     |
| `@guidy/ds`      | `packages/ds`      | Shared design system. Peer deps: React 19. |

`pnpm-workspace.yaml` also declares `apps/server/*` but no package exists there yet.

## App Architecture

Both web apps share identical architecture:

```
src/
├── main.tsx                 Entry: createRoot, imports DS reset/styles
├── app/
│   ├── App.tsx              Root: ErrorBoundary > AppProviders > HomePage
│   ├── components/          ErrorBoundary (uses DS ErrorFallback)
│   └── providers/           AppProviders: QueryClient + I18nextProvider
├── features/home/
│   ├── index.ts             Feature barrel (public API)
│   ├── pages/               HomePage
│   ├── organisms/           (landing only: Header, Hero, Features, Benefits, etc.)
│   ├── components/          (landing only: GuidyMascot)
│   └── hooks/               (landing only: useLanguage)
├── i18n/
│   ├── index.ts             i18n instance config
│   └── locales/             en.json, es.json
└── css-modules.d.ts         Type declarations for CSS modules
```

## Key Differences Between Apps

| Aspect           | Core                              | Landing                                                                   |
| ---------------- | --------------------------------- | ------------------------------------------------------------------------- |
| Default language | English (`en`)                    | Spanish (`es`)                                                            |
| Routing          | None (single page)                | None (single page)                                                        |
| Features         | DS showcase page                  | Marketing organisms (Header, Hero, Features, Benefits, StartFree, Footer) |
| Extra deps       | —                                 | `motion`, `lucide-react`                                                  |
| Suspense         | Yes (wraps HomePage with Spinner) | No                                                                        |

## Dependency Graph

```
@guidy/core ──────► @guidy/ds
@guidy/landing ──► @guidy/ds
                   ├── lucide-react
                   └── motion
```

## Build Tool

Rspack for both apps. Config at `rspack.config.ts`:

- `publicPath: 'auto'` (for GitHub Pages sub-paths)
- Path aliases: `@app`, `@features`, `@shared`, `@i18n`, `@guidy/ds`
- SWC + React refresh
- CSS Modules + global CSS
- HtmlRspackPlugin from `public/index.html`

## TypeScript

Base config at `tsconfig.base.json`:

- `ES2022`, `ESNext` modules, `bundler` resolution
- `strict`, `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`
- `react-jsx` (React 19 JSX transform)

## No Router Yet

TanStack Router is in the rules/skills as prescribed but NOT implemented in either app. Both apps render a single `HomePage` directly.

## Deployment

- CI: `.github/workflows/ci.yml` (PR to main)
- Deploy: `.github/workflows/deploy-gh-pages.yml` (push to main + manual dispatch)
- Pages structure: `deploy/` with apps and storybooks, hub `index.html`
