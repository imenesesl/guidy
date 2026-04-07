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
  9. `pnpm build:core` — build the app.
  10. `pnpm storybook:build` — build all Storybooks.

### 3. Create Storybook Deploy Workflow

Create `.github/workflows/deploy-storybook.yml`:

- **Trigger**: `push` to `main`.
- **Steps**:
  1. Full CI validation (same as above).
  2. Build DS Storybook → `packages/ds/storybook-static`.
  3. Build Core Storybook → `apps/web/core/storybook-static`.
  4. Assemble combined output:
     ```
     deploy/
     ├── index.html   # landing page
     ├── ds/          # copy of DS storybook-static
     └── core/        # copy of Core storybook-static
     ```
  5. Deploy to GitHub Pages using `peaceiris/actions-gh-pages@v4`.

### 4. Create Landing Page

Create a simple `index.html` that links to each Storybook:

```html
<!DOCTYPE html>
<html lang="en">
<head><title>Guidy Storybooks</title></head>
<body>
  <h1>Guidy Design System</h1>
  <ul>
    <li><a href="./ds/">Design System (DS)</a></li>
    <li><a href="./core/">Core App Components</a></li>
  </ul>
</body>
</html>
```

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
[ ] .github/workflows/deploy-storybook.yml exists and runs on push to main
[ ] All lint, typecheck, test, build, storybook:build steps present
[ ] pnpm install uses --frozen-lockfile in CI
[ ] Node.js version read from .nvmrc
[ ] pnpm store is cached
[ ] Storybook deploys to GitHub Pages
[ ] Landing page links to all Storybooks
[ ] Bundle analysis reports size changes
```
