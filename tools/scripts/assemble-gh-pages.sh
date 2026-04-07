#!/usr/bin/env bash
set -euo pipefail

GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

DEPLOY_DIR="${1:-deploy}"

log() { echo -e "${CYAN}[gh-pages]${NC} $1"; }
ok()  { echo -e "${GREEN}[gh-pages] ✔${NC} $1"; }

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  GUIDY — Assemble GitHub Pages"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ── 1. Build apps ──────────────────────────────
log "Building apps..."
pnpm build:core
pnpm build:landing
ok "Apps built"

# ── 2. Build storybooks ───────────────────────
log "Building Storybooks..."
pnpm storybook:build:ds
pnpm storybook:build:core
pnpm storybook:build:landing
ok "Storybooks built"

# ── 3. Assemble deploy directory ──────────────
log "Assembling ${DEPLOY_DIR}/..."
rm -rf "$DEPLOY_DIR"

mkdir -p "$DEPLOY_DIR/apps/core"
mkdir -p "$DEPLOY_DIR/apps/landing"
mkdir -p "$DEPLOY_DIR/storybook/ds"
mkdir -p "$DEPLOY_DIR/storybook/core"
mkdir -p "$DEPLOY_DIR/storybook/landing"

cp -r apps/web/core/dist/*              "$DEPLOY_DIR/apps/core/"
cp -r apps/web/landing/dist/*           "$DEPLOY_DIR/apps/landing/"
cp -r packages/ds/storybook-static/*    "$DEPLOY_DIR/storybook/ds/"
cp -r apps/web/core/storybook-static/*  "$DEPLOY_DIR/storybook/core/"
cp -r apps/web/landing/storybook-static/* "$DEPLOY_DIR/storybook/landing/"
cp .github/pages/index.html             "$DEPLOY_DIR/index.html"

ok "Assembled into ${DEPLOY_DIR}/"

# ── 4. Summary ────────────────────────────────
echo ""
echo "  ${DEPLOY_DIR}/"
echo "  ├── index.html"
echo "  ├── apps/"
echo "  │   ├── core/"
echo "  │   └── landing/"
echo "  └── storybook/"
echo "      ├── ds/"
echo "      ├── core/"
echo "      └── landing/"
echo ""
ok "Ready to deploy"
