# DevOps Pipeline Skill

This skill guides the creation and maintenance of CI/CD pipelines, Storybook deployments, and infrastructure.

## When to Activate

- Setting up or modifying GitHub Actions workflows.
- Deploying Storybook to GitHub Pages.
- Configuring CI validation gates.
- Adding new apps or packages that need CI coverage.
- Troubleshooting CI failures.

## Step-by-Step: Full Pipeline Setup

### 1. Verify Prerequisites

```bash
# Node version
cat .nvmrc  # must show 22

# pnpm workspace
cat pnpm-workspace.yaml  # must list all packages and apps

# Root scripts must exist
# lint, typecheck, test, build:*, storybook:build:*, storybook:build
```

### 2. Create CI Validation Workflow

Create `.github/workflows/ci.yml`:

- **Trigger**: `pull_request` to `main`.
- **Steps**:
  1. Checkout code.
  2. Setup Node.js 22 via `.nvmrc`.
  3. Enable corepack and activate pnpm.
  4. Cache pnpm store.
  5. `pnpm install --frozen-lockfile`.
  6. `pnpm lint` — all packages and apps.
  7. `pnpm typecheck` — all packages and apps.
  8. `pnpm test` — all packages and apps.
  9. `pnpm build:core` — build core app.
  10. `pnpm build:landing` — build landing app.
  11. `pnpm storybook:build` — build all Storybooks.

### 3. Create GitHub Pages Deploy Workflow

Create `.github/workflows/deploy-gh-pages.yml`:

- **Trigger**: `push` to `main`.
- **Steps**:
  1. Install dependencies.
  2. Run `bash tools/scripts/assemble-gh-pages.sh deploy` (builds apps, storybooks, assembles output).
  3. Deploy to GitHub Pages using `actions/deploy-pages@v4`.

The assembly script (`tools/scripts/assemble-gh-pages.sh`) is reusable and can be run locally to verify the deploy structure. It accepts an optional output directory argument (defaults to `deploy`).

Output structure:

```
deploy/
├── index.html              # Hub page (apps left, storybooks right)
├── apps/
│   ├── core/               # Core app build
│   └── landing/            # Landing app build
└── storybook/
    ├── ds/                 # DS Storybook
    ├── core/               # Core app Storybook
    └── landing/            # Landing Storybook
```

### 4. Hub Page

The hub page at `.github/pages/index.html` provides a two-column layout:

- **Left column**: Live app deployments (Landing, Core).
- **Right column**: Storybook instances (DS, Core Stories, Landing Stories).

The page uses dark theme, Google Sans font, card-based navigation with hover effects.

### 5. Add New Apps to Pipeline

When adding a new web app:

1. Add build script: `build:<app>` in root `package.json`.
2. Add storybook scripts: `storybook:<app>`, `storybook:build:<app>`.
3. Update `storybook:build` root script to include the new app.
4. Update CI workflow to build the new app.
5. Update deploy workflow to include the new Storybook.
6. Update landing page with link to new Storybook.

### 6. Bundle Analysis

- After each app build, run `rspack build --json > stats.json`.
- Compare sizes against the `main` branch baseline.
- Comment on the PR with size diff if increase > 5%.
- Store baseline stats as CI artifacts.

### 7. Troubleshooting

- **CI fails on install**: Check `pnpm-lock.yaml` is committed and up to date.
- **Storybook build fails**: Run `pnpm storybook:build:ds` and `pnpm storybook:build:core` locally first.
- **Tests fail in CI but pass locally**: Check for environment-specific issues (timezones, locale, file system).
- **Cache issues**: Clear the pnpm store cache in GitHub Actions settings.

## Validation Checklist

Before considering the DevOps setup complete:

```
[ ] .github/workflows/ci.yml exists and runs on PRs
[ ] .github/workflows/deploy-gh-pages.yml exists and runs on push to main
[ ] All lint, typecheck, test, build, storybook:build steps present
[ ] pnpm install uses --frozen-lockfile in CI
[ ] Node.js version read from .nvmrc
[ ] pnpm store is cached
[ ] Storybook deploys to GitHub Pages
[ ] Landing page links to all Storybooks
[ ] Bundle analysis reports size changes
```
