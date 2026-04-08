# Tech Debt

> Last updated: 2026-04-07
> Updated by: Brain initial analysis

## Active Tech Debt

### 1. No Router Implemented

**Severity**: Medium
**Location**: Both apps (`core`, `landing`)
**Issue**: TanStack Router is prescribed in rules/skills but not wired. Both apps render a single `HomePage` directly from `App.tsx`.
**Impact**: No client-side routing, no code splitting, no URL-based navigation.
**Resolution**: Implement TanStack Router when multiple pages are needed.

### 2. Brand Name "Guidy" Hardcoded in Header

**Severity**: Low
**Location**: `apps/web/landing/src/features/home/organisms/Header/Header.tsx`
**Issue**: Brand text `Guidy` is a literal JSX child, not using `t()`.
**Impact**: Not localized, though brand names typically aren't translated.
**Resolution**: Acceptable for brand names. Document as intentional.

### 3. Mascot aria-label Hardcoded

**Severity**: Low
**Location**: `apps/web/landing/src/features/home/components/GuidyMascot/GuidyMascot.tsx`
**Issue**: `aria-label="Guidy mascot"` is hardcoded English.
**Impact**: Accessibility label not localized.
**Resolution**: Move to i18n key.

### 4. console.error in ErrorBoundary

**Severity**: Low
**Location**: Both `ErrorBoundary.tsx` files
**Issue**: `console.error('[ErrorBoundary]', error, info.componentStack)` in production code.
**Impact**: Acceptable for error boundaries but could be replaced with a logging service.
**Resolution**: Replace with structured error reporting when a logging service is added.

### 5. GuidyMascot Approaching Line Limit

**Severity**: Low
**Location**: `apps/web/landing/src/features/home/components/GuidyMascot/GuidyMascot.tsx` (119 lines)
**Issue**: At 119/150 lines, close to the max-lines ESLint limit.
**Impact**: Limited room for new features in this component.
**Resolution**: Extract more sub-components (legs, arms, body) if it grows.

### 6. Text.tsx at 101 Lines

**Severity**: Low
**Location**: `packages/ds/src/atoms/Text/Text.tsx` (101 lines)
**Issue**: Approaching the 150-line limit.
**Impact**: Limited room for new text variants.
**Resolution**: Consider extracting variant mapping to a separate file if it grows.

### 7. Placeholder Workspace Directories

**Severity**: Info
**Location**: `apps/mobile/`, `apps/server/`
**Issue**: Only contain `README.md` placeholders. `apps/server/*` is in `pnpm-workspace.yaml` but has no package.json.
**Impact**: No functional impact but workspace resolution includes empty paths.
**Resolution**: Remove from `pnpm-workspace.yaml` until packages are created.

### 8. Root devDependencies Potentially Redundant

**Severity**: Info
**Location**: Root `package.json`
**Issue**: `@eslint/js`, `eslint`, `globals`, `typescript-eslint`, `typescript` are in root devDeps but not used by any root config file. Each package has its own copies.
**Impact**: Extra install time. No functional harm (pnpm hoisting).
**Resolution**: Evaluate if root deps are needed for lint-staged or can be removed.

## Resolved Tech Debt

- ErrorBoundary CSS duplication between apps → Resolved: extracted to DS ErrorFallback molecule
- Hardcoded strings in core HomePage → Resolved: all moved to i18n keys
- FeaturesSection inline styles + hex colors → Resolved: CSS classes with DS accent tokens
- Landing missing ESLint `no-restricted-syntax` → Resolved: added with GuidyMascot exception
- Missing tests for App.tsx, AppProviders.tsx → Resolved: tests and stories added for both apps
- Missing MascotHead.stories.tsx → Resolved: story added
- Missing barrel files for app/components → Resolved: index.ts added
