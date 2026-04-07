# Guidy

Monorepo for all Guidy applications and services.

## Structure

```
guidy/
├── apps/
│   ├── web/                # Web applications (React, Next.js, Angular, etc.)
│   ├── mobile/             # Mobile applications (Flutter)
│   └── server/             # Backend services (Node.js, NestJS, Go, Python, etc.)
│
├── packages/
│   ├── shared/             # Shared logic across platforms (types, utils, constants)
│   └── config/             # Shared dev configurations (linters, formatters, tsconfig)
│
├── tools/
│   └── scripts/            # Automation & CI/CD scripts
│
└── docs/                   # Architecture docs, ADRs, guides
```

## Conventions

| Area | Naming | Example |
|------|--------|---------|
| Web app | `apps/web/<app-name>` | `apps/web/dashboard` |
| Mobile app | `apps/mobile/<app-name>` | `apps/mobile/customer-app` |
| Server | `apps/server/<service-name>` | `apps/server/auth-api` |
| Shared package | `packages/<package-name>` | `packages/shared` |

## Adding a new application

1. Create a subdirectory inside the appropriate `apps/` folder.
2. Initialize the project with its own dependency manager (`package.json`, `pubspec.yaml`, etc.).
3. Add a `README.md` inside the app directory describing its purpose and how to run it.
4. If the app shares code, extract it into `packages/`.
