# Architecture Decision Records

> Last updated: 2026-04-08
> Updated by: Brain retrospective — full debt resolution

## ADR-001: Monorepo with pnpm Workspaces

**Date**: Project inception
**Status**: Accepted
**Context**: Need to manage multiple apps (web, mobile, server) with shared packages.
**Decision**: Use pnpm workspaces with `packages/*`, `apps/web/*`, `apps/server/*`.
**Consequence**: All packages share a single lockfile. Cross-package imports use `workspace:*`.

## ADR-002: Rspack Over Webpack/Vite for Web Apps

**Date**: Project inception
**Status**: Accepted
**Context**: Need fast builds for React 19 apps with TypeScript and CSS Modules.
**Decision**: Use Rspack (Rust-based bundler) for all web apps.
**Consequence**: Faster builds than Webpack. SWC for transpilation. `publicPath: 'auto'` for GitHub Pages.

## ADR-003: Design System as Separate Package

**Date**: Project inception
**Status**: Accepted
**Context**: Multiple apps need consistent UI components and tokens.
**Decision**: Create `@guidy/ds` package with CSS custom properties, atomic components, and TypeScript token exports.
**Consequence**: Apps import from `@guidy/ds`. DS has no app-specific logic, no i18n. All text comes via props.

## ADR-004: CSS Modules + DS Tokens for Styling

**Date**: Project inception
**Status**: Accepted
**Context**: Need scoped styles that use design tokens consistently.
**Decision**: CSS Modules for all components. All values must use `var(--ds-*)`. Enforced by Stylelint.
**Consequence**: No inline styles allowed (ESLint rule). No hardcoded colors/spacing. Exception: SVG transformOrigin in Motion animations.

## ADR-005: Motion for React for All Animations

**Date**: Landing page implementation
**Status**: Accepted
**Context**: Landing page needs scroll reveals, hover effects, and character animations.
**Decision**: Use `motion/react` (Motion for React) exclusively. No CSS `@keyframes` or `animation:`.
**Consequence**: All animations are component-based. Spring physics for natural feel. `whileInView` replaces IntersectionObserver.

## ADR-006: Lucide React for All Icons

**Date**: Landing page implementation
**Status**: Accepted
**Context**: Needed optimized, tree-shakeable icons.
**Decision**: Use `lucide-react` exclusively. No other icon libraries, no emojis, no image files.
**Consequence**: Icons imported individually. Size/color via props. Wrapped in `motion.div` for animation.

## ADR-007: ErrorFallback as DS Molecule

**Date**: Role chain audit
**Status**: Accepted
**Context**: ErrorBoundary CSS and UI were duplicated identically between core and landing.
**Decision**: Extract presentational error UI to `ErrorFallback` DS molecule. App ErrorBoundary classes delegate rendering to it.
**Consequence**: Single source of truth for error UI. Apps only keep lifecycle logic. CSS lives in DS.

## ADR-008: Spanish-First for Landing, English-First for Core

**Date**: Landing page implementation
**Status**: Accepted
**Context**: Landing is a public marketing site targeting Spanish-speaking teachers. Core is the product scaffold.
**Decision**: Landing defaults to `es` with `es` fallback. Core defaults to `en` with `en` fallback. Tests always run in English.
**Consequence**: Copywriting rule writes Spanish first, then adapts to English. Test assertions use English strings.

## ADR-009: GitHub Pages for App and Storybook Deployment

**Date**: Deployment setup
**Status**: Accepted
**Context**: Need to preview apps and Storybooks from main branch.
**Decision**: Deploy both apps and all Storybooks to GitHub Pages via `actions/deploy-pages@v4`. Reusable script `assemble-gh-pages.sh`.
**Consequence**: Hub page at root links to `apps/core`, `apps/landing`, `storybook/ds`, `storybook/core`, `storybook/landing`. Pages source must be set to "GitHub Actions".

## ADR-010: Brain Meta-Role for Knowledge Orchestration

**Date**: 2026-04-07
**Status**: Accepted
**Context**: 9 roles in the chain lack persistent shared knowledge. Each task starts without accumulated context.
**Decision**: Create Brain as a meta-role wrapping the chain. Brain maintains `.cursor/context/` files, runs standups before tasks, and retrospectives after.
**Consequence**: All roles read context files before starting. Knowledge persists across tasks. Loop ensures completeness.

## ADR-011: Injectable Error Handling in ErrorBoundary

**Date**: 2026-04-08
**Status**: Accepted
**Context**: Both ErrorBoundary classes used `console.error` directly. This tightly couples error reporting to the console.
**Decision**: Replace `console.error` with an optional `onError` callback prop. Callers inject their error handler (DI pattern). No default behavior when callback is omitted.
**Consequence**: Error reporting is injectable. When a logging service is added, only the `onError` prop value at the App.tsx level needs to change. Tests verify the callback is called.

## ADR-012: SVG Sub-component Extraction Pattern

**Date**: 2026-04-08
**Status**: Accepted
**Context**: GuidyMascot.tsx was at 119/150 lines. Complex SVG animations with multiple body parts.
**Decision**: Extract logical SVG groups (legs, arms) into separate components that accept a `walkCycle` transition prop. Internal components get their own tests and stories.
**Consequence**: Main component dropped to 62 lines (88 lines headroom). Each sub-component is independently testable and viewable in Storybook. ESLint `no-restricted-syntax` override extended to new files.

## ADR-013: Text Mapping Extraction

**Date**: 2026-04-08
**Status**: Accepted
**Context**: Text.tsx was at 101/150 lines. Most content was static mapping objects (variant-to-class, color-to-class, default-element).
**Decision**: Extract the three mapping constants to `Text.mappings.ts`. Keep type exports in `Text.tsx` since they're part of the public API.
**Consequence**: Text.tsx dropped to 60 lines (90 lines headroom). Mappings are independently importable if needed.
