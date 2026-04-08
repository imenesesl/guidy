# Tech Debt

> Last updated: 2026-04-08
> Updated by: Brain retrospective — full debt resolution

## Active Tech Debt

### 1. No Router Implemented

**Severity**: Medium
**Location**: Both apps (`core`, `landing`)
**Issue**: TanStack Router is prescribed in rules/skills but not wired. Both apps render a single `HomePage` directly from `App.tsx`.
**Impact**: No client-side routing, no code splitting, no URL-based navigation.
**Resolution**: Implement TanStack Router when multiple pages are needed.

### 2. Bundle Size Exceeds Recommended Limit

**Severity**: Low
**Location**: Both apps
**Issue**: Core entry is 289.69 KB, Landing entry is 421.99 KB. Both exceed the 244 KB Rspack recommended limit.
**Impact**: Potential web performance impact on slow connections.
**Resolution**: Implement code splitting with dynamic `import()` when router is added. Tree-shake Lucide icons (already done — individual imports).

## Resolved Tech Debt

- Brand name "Guidy" hardcoded in Header → Resolved: moved to i18n key `header.brand` (intentionally same in both languages)
- Mascot aria-label hardcoded in English → Resolved: moved to i18n key `mascot.aria_label` with localized versions
- console.error in ErrorBoundary → Resolved: replaced with injectable `onError` callback prop (DI pattern)
- GuidyMascot approaching 150-line limit (119 lines) → Resolved: extracted `MascotLegs` and `MascotArms` sub-components (main now 62 lines)
- Text.tsx at 101 lines → Resolved: extracted variant/color/element mappings to `Text.mappings.ts` (main now 60 lines)
- Placeholder `apps/server/*` in pnpm-workspace.yaml → Resolved: removed entry until a server package is created
- Redundant root devDependencies → Resolved: removed `@eslint/js`, `globals`, `typescript-eslint`, `typescript` from root (each package has own copies)
- ErrorBoundary CSS duplication between apps → Resolved: extracted to DS ErrorFallback molecule
- Hardcoded strings in core HomePage → Resolved: all moved to i18n keys
- FeaturesSection inline styles + hex colors → Resolved: CSS classes with DS accent tokens
- Landing missing ESLint `no-restricted-syntax` → Resolved: added with GuidyMascot exception
- Missing tests for App.tsx, AppProviders.tsx → Resolved: tests and stories added for both apps
- Missing MascotHead.stories.tsx → Resolved: story added
- Missing barrel files for app/components → Resolved: index.ts added
