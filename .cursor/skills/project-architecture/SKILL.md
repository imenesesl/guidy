---
name: project-architecture
description: >-
  Enforces and audits the Guidy monorepo architecture. Use when creating,
  moving, or deleting apps, packages, or directories, when modifying the
  project structure, or when the user asks about architecture, structure,
  or conventions.
---

# Project Architecture

## Monorepo Layout

```
guidy/
├── apps/
│   ├── web/<app-name>/         # Web apps (React, Next.js, Angular, etc.)
│   ├── mobile/<app-name>/      # Flutter mobile apps
│   └── server/<service-name>/  # Backend services
├── packages/<package-name>/    # Shared libraries
├── tools/scripts/              # Automation scripts
└── docs/                       # Architecture docs, ADRs
```

## Workflow: Adding a New App

Follow ALL steps in order. Do not skip any.

### Step 1 — Pre-flight audit

Run `ls apps/web apps/mobile apps/server packages` and verify the current structure is clean before making changes.

### Step 2 — Create the app directory

Place it in the correct location based on type:

| Type | Command |
|------|---------|
| Web | `mkdir -p apps/web/<app-name>` |
| Mobile | `flutter create apps/mobile/<app-name>` |
| Server | `mkdir -p apps/server/<service-name>` |
| Package | `mkdir -p packages/<package-name>` |

Use `kebab-case` for all names.

### Step 3 — Initialize the project

- Web/Server: create `package.json` with appropriate scripts
- Mobile: `flutter create` handles this
- Package: create `package.json` or appropriate manifest

### Step 4 — Create the app README

Create `README.md` inside the new directory with this template:

```markdown
# <App Name>

<One-line description>

## Getting Started

### Prerequisites
- <list dependencies>

### Install
<install command>

### Run
<run command>

### Test
<test command>
```

### Step 5 — Update parent README

Update the README in the parent directory (`apps/web/README.md`, `apps/mobile/README.md`, `apps/server/README.md`, or `packages/README.md`) to list the new entry.

### Step 6 — Update root README

Update `/README.md`:
1. Add the new entry to the structure tree.
2. Add a row to the conventions table if it introduces a new pattern.

### Step 7 — Post-flight audit

Run the full audit checklist and output results.

## Workflow: Adding a New Package

Same steps as above, but place under `packages/<name>/`.

## Workflow: Removing an App or Package

1. Pre-flight audit.
2. Remove the directory.
3. Update parent README — remove the entry.
4. Update root README — remove from tree.
5. Post-flight audit.

## Audit Checklist

Run this check before AND after any structural change:

```
Structure Audit:
  [ ] Only allowed top-level dirs exist (apps/, packages/, tools/, docs/)
  [ ] Every app is under apps/web/, apps/mobile/, or apps/server/
  [ ] Every shared package is under packages/
  [ ] Every app/package directory has a README.md
  [ ] Root README structure tree matches actual layout
  [ ] All directory names use kebab-case
  [ ] No apps nested inside other apps
```

Output format:

```
Structure Audit:
  [PASS] Directory integrity — only allowed top-level dirs
  [PASS] App placement — all apps correctly placed
  [WARN] Missing README in apps/web/dashboard/
  [FAIL] Root README out of sync — missing apps/server/auth-api
```

If any check is `[WARN]` or `[FAIL]`, fix it before continuing.

## Forbidden Actions

- Creating apps or packages outside the defined structure.
- Nesting apps inside other apps.
- Creating new top-level directories without explicit user approval.
- Skipping README updates after structural changes.
- Using names that are not `kebab-case`.
