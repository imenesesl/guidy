# Core

Main web application for Guidy. Built with Rspack, React, and TypeScript.

## Getting Started

### Prerequisites

- Node.js 22 (see `.nvmrc` — run `nvm use` at the repo root)
- pnpm >= 10

### Install

From the monorepo root:

```bash
pnpm install
```

### Run

```bash
pnpm dev:core
# or from this directory
pnpm dev
```

Opens at `http://localhost:3000`.

### Build

```bash
pnpm build
```

### Test

```bash
pnpm test
```

### Lint

```bash
pnpm lint
```

## Tech Stack

| Tool | Purpose |
|------|---------|
| Rspack | Bundler |
| React 19 | UI |
| TypeScript (strict) | Language |
| ESLint 10 (flat config) | Linting |
| TanStack Router | Navigation |
| TanStack Query | Data fetching |
| React Hook Form + Valibot | Forms + validation |
| react-i18next | Internationalization |
| @guidy/ds | Design system |
| Vitest | Tests |

## Structure

```
src/
├── app/              # App shell, providers, router
├── features/         # Isolated feature modules
├── shared/           # Cross-feature shared code
├── i18n/             # Internationalization
└── main.tsx          # Entry point
```
