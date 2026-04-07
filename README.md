# Guidy

Monorepo for all Guidy applications and services.

## Structure

```
guidy/
├── apps/
│   ├── web/
│   │   └── core/              # Main web app (Rspack + React + TypeScript)
│   ├── mobile/                # Mobile applications (Flutter)
│   └── server/                # Backend services
│
├── packages/
│   ├── ds/                    # Design system — @guidy/ds (tokens, atoms, molecules)
│   ├── shared/                # Shared logic across platforms (types, utils, constants)
│   └── config/                # Shared dev configurations (linters, formatters, tsconfig)
│
├── tools/
│   └── scripts/               # Automation & CI/CD scripts
│
└── docs/                      # Architecture docs, ADRs, guides
```

## Conventions

| Area           | Naming                       | Example                    |
| -------------- | ---------------------------- | -------------------------- |
| Web app        | `apps/web/<app-name>`        | `apps/web/core`            |
| Mobile app     | `apps/mobile/<app-name>`     | `apps/mobile/customer-app` |
| Server         | `apps/server/<service-name>` | `apps/server/auth-api`     |
| Design system  | `packages/ds`                | `packages/ds`              |
| Shared package | `packages/<package-name>`    | `packages/shared`          |

## Quick Start

```bash
# Install all dependencies
pnpm install

# Run core web app
pnpm dev:core
```

## Adding a new application

1. Create a subdirectory inside the appropriate `apps/` folder.
2. Initialize the project with its own dependency manager (`package.json`, `pubspec.yaml`, etc.).
3. Add a `README.md` inside the app directory describing its purpose and how to run it.
4. If the app shares code, extract it into `packages/`.
