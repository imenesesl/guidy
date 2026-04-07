---
name: web-workflow
description: >-
  End-to-end role-based workflow for developing web features. Orchestrates
  Architect, Staff Frontend, Staff Design Engineer, Senior Engineer, QA,
  and Auditor roles. Use when building features, implementing changes, or
  executing any web development task in apps/web/.
---

# Web Workflow

## Overview

Every web feature goes through 7 roles in sequence. Each role produces an output that feeds the next.

```
Architect → Staff Frontend → Staff Design Engineer → Senior Engineer → QA → Auditor → DevOps
```

## Phase 1 — Architect

**Goal**: Define WHAT to build and HOW it fits the architecture.

### Actions

1. Analyze the feature request.
2. Break it into tasks following Atomic Design layers.
3. Map dependencies between features, shared components, and services.
4. Define the DI boundaries (what gets injected where).
5. Produce a work plan.

### Output — Work Plan

```markdown
## Work Plan: <Feature Name>

### Components

- atoms: [list]
- molecules: [list]
- organisms: [list]
- pages: [list]

### Hooks

- [list with purpose]

### Services

- [list with interfaces]

### Schemas

- [list of Valibot schemas]

### Dependencies

- External: [packages needed]
- Internal: [shared modules used]

### DI Map

- [what gets injected into what]
```

### Validation

- Does each component have a single responsibility?
- Are features isolated with a public API barrel?
- Are all external dependencies injectable?
- Does the plan follow SOLID?

If validation fails, iterate until it passes.

## Phase 2 — Staff Frontend

**Goal**: Validate patterns and document any new ones.

### Actions

1. Review the work plan against existing patterns in the codebase.
2. Check if existing hooks, services, or components can be reused.
3. Identify any NEW patterns that the plan introduces.
4. For each new pattern: create a new rule in `.cursor/rules/` documenting it.
5. Validate feature isolation: no cross-feature deep imports planned.
6. Iterate with Architect if changes are needed.

### Output

- Approved/revised work plan.
- New `.cursor/rules/*.mdc` files for any new patterns.

## Phase 3 — Staff Design Engineer

**Goal**: Ensure the design system covers all UI needs.

### Actions

1. Review the component list from the work plan.
2. For each UI component, check if a generic version exists in `shared/`.
3. If missing: create the generic component following design tokens.
4. If existing but insufficient: update it (add variants, props).
5. Create/update design tokens if new visual values are needed.
6. Write Storybook stories for every new/updated component.
7. Verify all stories render correctly.

### Output — Component Inventory

```markdown
## Component Inventory: <Feature Name>

### Existing (reuse)

- Button (atoms) — no changes
- FormField (molecules) — no changes

### New

- StatusBadge (atoms) — [variants: success, error, pending]
- DataCard (molecules) — [props: title, value, trend]

### Updated

- Select (atoms) — added `searchable` prop

### New Tokens

- --color-status-success: ...
- --color-status-error: ...

### Stories Created/Updated

- StatusBadge.stories.tsx
- DataCard.stories.tsx
- Select.stories.tsx (updated)
```

## Phase 4 — Senior Engineer

**Goal**: Implement the feature following all rules.

### Actions

1. Receive the work plan + component inventory.
2. Create the feature directory structure under `src/features/<name>/`.
3. Implement in this order:
   a. Types and interfaces (`types/`)
   b. Valibot schemas (`schemas/`)
   c. Service interfaces and implementations (`services/`)
   d. Custom hooks (`hooks/`)
   e. Atoms → Molecules → Organisms → Templates → Pages
   f. Route integration
   g. Feature barrel export (`index.ts`)
4. Ensure every component uses i18n for text.
5. Ensure every component uses tokens for styles.
6. Ensure all dependencies are injected via providers/hooks.

### Checklist

```
Implementation:
  [ ] Feature directory created with correct structure
  [ ] All types defined, zero `any`
  [ ] Schemas created with Valibot
  [ ] Services have interfaces + injectable implementations
  [ ] All state logic in custom hooks
  [ ] Components follow Atomic Design hierarchy
  [ ] All text from i18n
  [ ] All styles from tokens
  [ ] Barrel export in index.ts
  [ ] No cross-feature deep imports
```

## Phase 5 — QA

**Goal**: Create tests for EVERYTHING. No exceptions. No omissions.

**ABSOLUTE RULE**: Every piece of code produced must have tests. If code exists, tests exist.

### Actions

1. **Storybook stories** (MANDATORY for every component):
   - Every atom, molecule, organism, and page gets a `.stories.tsx`.
   - Stories cover ALL variants, sizes, and states.
   - Use `argTypes` for interactive controls.
   - Use `play` functions for interaction testing.

2. **Component tests** (MANDATORY for every component):
   - Every component gets a `.test.tsx` colocated next to it.
   - Test rendering, props, interactions, edge cases.

3. **Unit tests** (MANDATORY for every hook, utility, service, schema):
   - Every hook → `.test.ts`
   - Every utility → `.test.ts`
   - Every service → `.test.ts`
   - Every schema → `.test.ts` with valid + invalid inputs.
   - Every constants module → `.test.ts`

4. **Feature E2E tests** (MANDATORY for every feature):
   - Test full feature flows by rendering with injected mock dependencies.
   - Verify the DI pattern works — all dependencies are mockable.
   - Test happy paths and error paths.

5. Run ALL tests and verify 100% pass rate.
6. Verify coverage thresholds (80% branches, functions, lines, statements).

### Test Structure

Tests are ALWAYS colocated with the code they test:

```
features/<name>/
├── hooks/
│   ├── useFeature.ts
│   └── useFeature.test.ts        # MANDATORY
├── services/
│   ├── feature.service.ts
│   └── feature.service.test.ts   # MANDATORY
├── schemas/
│   ├── feature.schema.ts
│   └── feature.schema.test.ts    # MANDATORY
├── pages/
│   ├── FeaturePage.tsx
│   ├── FeaturePage.module.css
│   ├── FeaturePage.stories.tsx    # MANDATORY
│   └── FeaturePage.test.tsx       # MANDATORY
```

### Requirements

- NO Playwright.
- All external dependencies mocked via DI.
- Coverage thresholds must be met.
- **"No Test, No Push"**: code without tests is incomplete and MUST NOT be pushed.

## Phase 6 — Auditor

**Goal**: Final validation before push.

### Actions

1. Run ESLint: `pnpm lint` — zero errors.
2. Run TypeScript check: `pnpm tsc --noEmit` — zero errors.
3. Run all tests: `pnpm test` — all passing.
4. Run Storybook build: `pnpm build-storybook` — no errors.
5. Scan for hardcoded colors: search for `#[0-9a-fA-F]`, `rgb(`, `hsl(` outside token files.
6. Scan for hardcoded text: search for raw strings in JSX that aren't using `t()`.
7. Scan for unused exports: check for dead code.
8. Bundle analysis:
   - Record bundle size before changes.
   - Build and record bundle size after.
   - Document comparison.
   - Flag increases > 5%.

### Output — Audit Report

```
Quality Gate Report:
  [PASS] ESLint — 0 errors, 0 warnings
  [PASS] TypeScript — strict, 0 errors
  [PASS] Tests — 47/47 passing
  [PASS] Storybook — builds clean
  [PASS] No hardcoded colors
  [PASS] No hardcoded text — all i18n
  [PASS] No unused code
  [PASS] Bundle — 142KB → 148KB (+4.2%, within threshold)

Ready to push.
```

If ANY check fails:

- Identify the responsible role.
- Send back for fixing.
- Re-run the audit after fixes.
- Only push when ALL checks pass.

## Phase 7 — DevOps

**Goal**: Ensure CI/CD pipeline validates and deploys correctly.

### Actions

1. Verify GitHub Actions CI workflow runs all validation steps.
2. Verify Storybook deployment workflow is configured.
3. If a new app or package was added:
   - Update CI workflow to include new build/test targets.
   - Update Storybook deployment to include new Storybook.
   - Update the GitHub Pages landing page.
4. Verify branch strategy is followed (feat/, fix/, chore/).
5. Ensure PR has required labels (`ai`, `cursor`).

### Output — Pipeline Status

```
CI/CD Status:
  [PASS] ci.yml — all steps configured
  [PASS] deploy-gh-pages.yml — deployment configured
  [PASS] New targets included in pipeline
  [PASS] Labels applied to PR

Ready to merge.
```
