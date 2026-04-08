# Quality Metrics

> Last updated: 2026-04-08
> Updated by: Brain retrospective — full debt resolution

## Test Coverage

| Package          | Test Files | Tests   | Status          |
| ---------------- | ---------- | ------- | --------------- |
| `@guidy/ds`      | 16         | 83      | All passing     |
| `@guidy/landing` | 15         | 53      | All passing     |
| `@guidy/core`    | 4          | 14      | All passing     |
| **Total**        | **35**     | **150** | **All passing** |

Coverage thresholds: 80% (branches, functions, lines, statements).

## Story Coverage

| Package          | Story Files | Status                      |
| ---------------- | ----------- | --------------------------- |
| `@guidy/ds`      | 15          | Every component has a story |
| `@guidy/landing` | 14          | Every component has a story |
| `@guidy/core`    | 4           | Every component has a story |
| **Total**        | **33**      | **Complete**                |

All three Storybooks build successfully (DS, Core, Landing).

## Component Count

| Package          | Production .tsx Files                   |
| ---------------- | --------------------------------------- |
| `@guidy/ds`      | 15 (10 atoms + 5 molecules) + 1 mapping |
| `@guidy/landing` | 15 (including MascotLegs, MascotArms)   |
| `@guidy/core`    | 5                                       |
| **Total**        | **36**                                  |

## ESLint

- 0 errors across all 3 packages
- 4 warnings (DS story files: missing return types — acceptable)

## Stylelint

- 0 errors across all CSS modules

## TypeScript

- 0 errors across all 3 packages
- Strict mode with `noUncheckedIndexedAccess`

## Prettier

- 0 formatting issues

## Bundle Size

| App     | JS        | CSS      | Total Entry |
| ------- | --------- | -------- | ----------- |
| Core    | 277.42 KB | 12.27 KB | 289.69 KB   |
| Landing | 405.85 KB | 16.14 KB | 421.99 KB   |

Both exceed the 244 KB recommended limit (Rspack warning). Landing is larger due to Motion + Lucide.

## DRY Audit

7 pass, 1 warning (GuidyMascot — pure SVG, expected), 0 failures.

## Files Approaching Line Limit (150)

| File              | Lines | Headroom |
| ----------------- | ----- | -------- |
| `GuidyMascot.tsx` | 62    | 88 lines |
| `Text.tsx`        | 60    | 90 lines |
| `typography.ts`   | 94    | 56 lines |

All previously at-risk files now have significant headroom after extraction.

## Pre-commit Hook

Runs: `pnpm lint-staged` + `pnpm typecheck`.
Does NOT run: `pnpm test` (tests rely on CI).

## Root devDependencies

Cleaned: only `eslint`, `husky`, `lint-staged`, `prettier`, `stylelint`, `stylelint-config-standard`, `stylelint-declaration-strict-value` remain. Per-package config dependencies (`@eslint/js`, `globals`, `typescript-eslint`, `typescript`) removed from root.
