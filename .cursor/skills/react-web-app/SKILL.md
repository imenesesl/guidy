---
name: react-web-app
description: >-
  Sets up and maintains React web applications with Rspack, TypeScript,
  TanStack Router/Query, React Hook Form, Valibot, Storybook, and ESLint
  flat config. Use when creating a new web app, adding features, setting
  up tooling, or working on any app under apps/web/.
---

# React Web App

## Tech Stack

| Tool | Purpose |
|------|---------|
| Rspack | Bundler |
| React 18+ | UI library |
| TypeScript (strict) | Language |
| ESLint (flat config) | Linting |
| TanStack Router | Navigation |
| TanStack Query | Server state / data fetching |
| React Hook Form | Form management |
| Valibot | Schema validation |
| Storybook | Component docs, visual tests |
| Vitest | Unit and integration tests |
| react-i18next | Internationalization |

## Creating a New Web App

### Step 1 — Scaffold with Rspack

```bash
cd apps/web
npx @rspack/create <app-name>
```

Select the React + TypeScript template.

### Step 2 — Install core dependencies

```bash
cd apps/web/<app-name>

# Routing & data
npm install @tanstack/react-router @tanstack/react-query

# Forms & validation
npm install react-hook-form @hookform/resolvers valibot

# i18n
npm install react-i18next i18next

# Dev tooling
npm install -D eslint @eslint/js typescript-eslint globals
npm install -D @storybook/react-vite storybook
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

### Step 3 — Configure TypeScript strict

Ensure `tsconfig.json` has:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Step 4 — Configure ESLint flat config

Create `eslint.config.js`:

```javascript
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
);
```

### Step 5 — Set up project structure

```
apps/web/<app-name>/
├── src/
│   ├── app/                    # App shell, providers, router
│   │   ├── providers/          # DI containers, context providers
│   │   ├── router/             # TanStack Router config
│   │   └── App.tsx
│   ├── features/               # Isolated feature modules
│   │   └── <feature>/
│   │       ├── atoms/
│   │       ├── molecules/
│   │       ├── organisms/
│   │       ├── templates/
│   │       ├── pages/
│   │       ├── hooks/
│   │       ├── services/
│   │       ├── schemas/
│   │       ├── types/
│   │       ├── constants/
│   │       └── index.ts        # public API
│   ├── shared/                 # Cross-feature shared code
│   │   ├── atoms/              # Generic design system atoms
│   │   ├── molecules/          # Generic design system molecules
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── tokens/                 # Design tokens (CSS custom properties)
│   ├── i18n/                   # i18n config and locale files
│   │   ├── locales/
│   │   │   ├── en.json
│   │   │   └── es.json
│   │   └── index.ts
│   └── main.tsx
├── .storybook/
├── eslint.config.js
├── tsconfig.json
├── rspack.config.ts
├── package.json
└── README.md
```

### Step 6 — Set up DI providers

Create a root provider that composes all dependency containers:

```typescript
// src/app/providers/AppProviders.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApiProvider } from './ApiProvider';
import { I18nProvider } from './I18nProvider';

interface AppProvidersProps {
  children: React.ReactNode;
  apiClient?: ApiClient;       // injectable for testing
  queryClient?: QueryClient;   // injectable for testing
}

export function AppProviders({ children, apiClient, queryClient }: AppProvidersProps) {
  const client = queryClient ?? new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ApiProvider client={apiClient}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </ApiProvider>
    </QueryClientProvider>
  );
}
```

### Step 7 — Follow project-architecture skill

Run the monorepo structure audit as defined in `.cursor/skills/project-architecture/SKILL.md`.
Update all READMEs (app, parent, root).

## Feature Development

When adding a feature, follow the `web-workflow` skill at `.cursor/skills/web-workflow/SKILL.md`.

## Key Rules Reference

All web app code must follow these rules:
- `react-web-standards.mdc` — coding standards
- `design-system-standards.mdc` — design system
- `web-quality-gate.mdc` — quality checks
- `web-roles.mdc` — role workflow
