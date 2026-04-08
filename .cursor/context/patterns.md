# Patterns

> Last updated: 2026-04-08
> Updated by: Brain retrospective — full debt resolution

## Component Patterns

### File Organization

Every component lives in a PascalCase folder with colocated files:

```
ComponentName/
├── ComponentName.tsx           Component implementation
├── ComponentName.module.css    Styles (CSS Modules)
├── ComponentName.test.tsx      Tests (Vitest + Testing Library)
├── ComponentName.stories.tsx   Storybook stories
└── index.ts                    Barrel export
```

### Named Exports Only

All components use named exports, never default exports (except Storybook meta).

### Return Types

All functions declare explicit return types: `React.JSX.Element` for components, `void` for handlers.

### CSS Modules Access

Class names are accessed via bracket notation: `styles['className']`.

### Variant-Based Styling

DS components use variant props mapped to CSS classes:

```tsx
<div className={styles[variant]}>
```

For multiple classes, use template literals with `?? ''` for index safety:

```tsx
className={`${styles['base'] ?? ''} ${styles[`variant--${value}`] ?? ''}`}
```

## i18n Patterns

### Function Components

Use `useTranslation()` hook:

```tsx
const { t } = useTranslation();
<Text>{t('section.key')}</Text>;
```

### Class Components

Import singleton `i18n` directly:

```tsx
import { i18n } from '@i18n/index';
i18n.t('error.title');
```

### Language Toggle

`useLanguage` hook wraps `useTranslation` for es/en toggle.

## Animation Patterns

### Scroll Reveal

`motion.div` or `motion.section` with `whileInView`:

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
/>
```

### Staggered Children

Parent `variants` with `staggerChildren`, child `variants` with individual animation:

```tsx
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
```

### Interactive Elements

`whileHover` + `whileTap` with spring physics:

```tsx
whileHover={{ y: -8, scale: 1.02 }}
whileTap={{ scale: 0.98 }}
transition={{ type: 'spring', stiffness: 300, damping: 20 }}
```

### SVG Animations

`motion.g` with `style={{ transformOrigin }}` for SVG transform pivots. ESLint `no-restricted-syntax` is disabled for GuidyMascot files.

## Import Patterns

### Path Aliases (apps only)

- `@app/*` → `src/app/*`
- `@features/*` → `src/features/*`
- `@shared/*` → `src/shared/*`
- `@i18n/*` → `src/i18n/*`
- `@guidy/ds` → `packages/ds/src`

### DS Imports

```tsx
import { Button, Text, Card } from '@guidy/ds';
import type { ButtonProps } from '@guidy/ds';
```

### Feature Barrels

Each feature exposes a public API through `index.ts`:

```tsx
export { HomePage } from './pages/HomePage';
```

### Type-Only Imports

Enforced by ESLint `consistent-type-imports`:

```tsx
import type { ReactNode } from 'react';
```

## DI Pattern

Dependency injection via React providers:

- `AppProviders` accepts optional `queryClient` for test injection
- `I18nextProvider` wraps with app `i18n` instance
- No custom `createContext` usage yet; DI is provider-level

## Test Patterns

### Test Setup

- DS: `@testing-library/jest-dom/vitest` only
- Core: jest-dom + `import '@i18n/index'`
- Landing: jest-dom + `MockIntersectionObserver` + `i18n.changeLanguage('en')`

### Test Structure

Render component, assert text/elements with Testing Library queries.
No `vi.mock` used — tests rely on real i18n and global IO mock.

### Hook Tests

`renderHook` + `act` for state changes.

## Component Extraction Pattern

When a component approaches the 150-line limit:

1. Identify logical groups within the component (e.g., SVG body parts, mapping objects).
2. Extract each group to a separate file in the same directory.
3. Internal sub-components receive configuration via props (e.g., `walkCycle` transition).
4. Each extracted component gets its own `.test.tsx` and `.stories.tsx`.
5. Update ESLint overrides if the sub-components share the parent's exemptions.

Example: `GuidyMascot` → `MascotHead`, `MascotLegs`, `MascotArms` (each with walkCycle prop).
Example: `Text` → `Text.mappings.ts` (static mapping objects extracted).

## Injectable Error Handling (DI)

ErrorBoundary accepts an optional `onError` callback:

```tsx
<ErrorBoundary onError={(error, stack) => logger.report(error, stack)}>
  <App />
</ErrorBoundary>
```

No default behavior when omitted. Callers inject their error handler.

## ESLint Conventions

- `max-lines: 150` (skip blanks/comments)
- `no-explicit-any: error`
- `no-restricted-syntax` bans inline `style` attribute
- Override: stories and tests exempt from `no-restricted-syntax`
- Landing: GuidyMascot files exempt (SVG transformOrigin)
- Apps enforce `no-restricted-imports` for path alias usage
