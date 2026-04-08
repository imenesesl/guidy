# Quality Metrics

> Last updated: 2026-04-07
> Updated by: Brain initial analysis

## Test Coverage

| Package          | Test Files | Tests    | Status          |
| ---------------- | ---------- | -------- | --------------- |
| `@guidy/ds`      | 16         | ~91      | All passing     |
| `@guidy/landing` | 14         | ~47      | All passing     |
| `@guidy/core`    | 4          | ~13      | All passing     |
| **Total**        | **34**     | **~151** | **All passing** |

Coverage thresholds: 80% (branches, functions, lines, statements).

## Story Coverage

| Package          | Story Files | Status                      |
| ---------------- | ----------- | --------------------------- |
| `@guidy/ds`      | 15          | Every component has a story |
| `@guidy/landing` | 12          | Every component has a story |
| `@guidy/core`    | 4           | Every component has a story |
| **Total**        | **31**      | **Complete**                |

## Component Count

| Package          | Production .tsx Files       |
| ---------------- | --------------------------- |
| `@guidy/ds`      | 15 (10 atoms + 5 molecules) |
| `@guidy/landing` | 13                          |
| `@guidy/core`    | 5                           |
| **Total**        | **33**                      |

## ESLint

- 0 errors across all 3 packages
- 4 warnings (DS story files: missing return types — acceptable)

## Stylelint

- 0 errors across all CSS modules

## TypeScript

- 0 errors across all 3 packages
- Strict mode with `noUncheckedIndexedAccess`

## Bundle Size

| App     | JS      | CSS    | Total Entry |
| ------- | ------- | ------ | ----------- |
| Core    | ~277 KB | ~12 KB | ~290 KB     |
| Landing | ~405 KB | ~16 KB | ~422 KB     |

Both exceed the 244 KB recommended limit (Rspack warning). Landing is larger due to Motion + Lucide.

## Quality Gate (audit.sh)

13 checks, all passing:

1. Node.js 22
2. pnpm installed
3. ESLint zero errors
4. Stylelint no hardcoded values
5. TypeScript strict zero errors
6. All tests passing
7. Build core compiles
8. Build landing compiles
9. Storybook DS builds
10. Storybook Core builds
11. Storybook Landing builds
12. Every component has a story
13. Every component has a test

## DRY Audit

7 pass, 1 warning (GuidyMascot — pure SVG, expected), 0 failures.

## Files Approaching Line Limit (150)

| File              | Lines | Headroom |
| ----------------- | ----- | -------- |
| `GuidyMascot.tsx` | 119   | 31 lines |
| `Text.tsx`        | 101   | 49 lines |
| `typography.ts`   | 94    | 56 lines |

## Pre-commit Hook

Runs: `pnpm lint-staged` + `pnpm typecheck`.
Does NOT run: `pnpm test` (tests rely on CI).
