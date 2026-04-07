#!/usr/bin/env bash
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

PASS=0
FAIL=0
WARN=0
RESULTS=()

pass() {
  RESULTS+=("${GREEN}[PASS]${NC} $1")
  PASS=$((PASS + 1))
}

fail() {
  RESULTS+=("${RED}[FAIL]${NC} $1")
  FAIL=$((FAIL + 1))
}

warn() {
  RESULTS+=("${YELLOW}[WARN]${NC} $1")
  WARN=$((WARN + 1))
}

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  GUIDY — DRY Audit"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ── 1. Custom <button> bypassing DS Button ──────────
echo "Checking for custom <button> bypassing DS..."
CUSTOM_BTN=$(grep -rn '<button\b' apps/web/*/src --include='*.tsx' \
  | grep -v '.test.tsx' | grep -v '.stories.tsx' \
  | grep -v 'node_modules' || true)

if [ -z "$CUSTOM_BTN" ]; then
  pass "No custom <button> — all use DS Button"
else
  fail "Custom <button> found (should use DS Button):\n$CUSTOM_BTN"
fi

# ── 2. Custom <input> bypassing DS Input ──────────
echo "Checking for custom <input> bypassing DS..."
CUSTOM_INPUT=$(grep -rn '<input\b' apps/web/*/src --include='*.tsx' \
  | grep -v '.test.tsx' | grep -v '.stories.tsx' \
  | grep -v 'node_modules' || true)

if [ -z "$CUSTOM_INPUT" ]; then
  pass "No custom <input> — all use DS Input"
else
  fail "Custom <input> found (should use DS Input):\n$CUSTOM_INPUT"
fi

# ── 3. Custom <select> bypassing DS ──────────
echo "Checking for custom <select> bypassing DS..."
CUSTOM_SELECT=$(grep -rn '<select\b' apps/web/*/src --include='*.tsx' \
  | grep -v '.test.tsx' | grep -v '.stories.tsx' \
  | grep -v 'node_modules' || true)

if [ -z "$CUSTOM_SELECT" ]; then
  pass "No custom <select>"
else
  fail "Custom <select> found (should use DS component):\n$CUSTOM_SELECT"
fi

# ── 4. Custom <textarea> bypassing DS ──────────
echo "Checking for custom <textarea> bypassing DS..."
CUSTOM_TEXTAREA=$(grep -rn '<textarea\b' apps/web/*/src --include='*.tsx' \
  | grep -v '.test.tsx' | grep -v '.stories.tsx' \
  | grep -v 'node_modules' || true)

if [ -z "$CUSTOM_TEXTAREA" ]; then
  pass "No custom <textarea>"
else
  fail "Custom <textarea> found (should use DS component):\n$CUSTOM_TEXTAREA"
fi

# ── 5. Raw heading tags bypassing DS Text ──────────
echo "Checking for raw <h1>-<h6> bypassing DS Text..."
CUSTOM_HEADINGS=$(grep -rn '<h[1-6]\b' apps/web/*/src --include='*.tsx' \
  | grep -v '.test.tsx' | grep -v '.stories.tsx' \
  | grep -v 'node_modules' || true)

if [ -z "$CUSTOM_HEADINGS" ]; then
  pass "No raw headings — all use DS Text"
else
  warn "Raw <h1>-<h6> found (consider DS Text):\n$CUSTOM_HEADINGS"
fi

# ── 6. Raw <p> tags bypassing DS Text ──────────
echo "Checking for raw <p> bypassing DS Text..."
CUSTOM_P=$(grep -rn '<p\b' apps/web/*/src --include='*.tsx' \
  | grep -v '.test.tsx' | grep -v '.stories.tsx' \
  | grep -v 'node_modules' || true)

if [ -z "$CUSTOM_P" ]; then
  pass "No raw <p> — all use DS Text"
else
  warn "Raw <p> found (consider DS Text):\n$CUSTOM_P"
fi

# ── 7. DS import coverage ──────────
echo "Checking DS import coverage in app components..."
NO_DS=0
NO_DS_FILES=""
while IFS= read -r f; do
  base=$(basename "$f")
  if [[ "$base" == *.test.tsx ]] || [[ "$base" == *.stories.tsx ]] || \
     [[ "$base" == main.tsx ]] || [[ "$base" == App.tsx ]] || \
     [[ "$base" == *.d.ts ]] || [[ "$base" == test-setup.ts ]] || \
     [[ "$f" == *providers* ]] || [[ "$f" == *pages/* ]]; then
    continue
  fi
  if ! grep -q '@guidy/ds' "$f" 2>/dev/null; then
    has_jsx=$(grep -c '<[A-Z]' "$f" 2>/dev/null || true)
    has_jsx=${has_jsx:-0}
    has_jsx=$(echo "$has_jsx" | tr -d '[:space:]')
    if [ "$has_jsx" -gt 0 ] 2>/dev/null; then
      NO_DS=$((NO_DS + 1))
      NO_DS_FILES="$NO_DS_FILES\n  $f"
    fi
  fi
done < <(find apps/web/*/src -name '*.tsx' ! -path '*/node_modules/*')

if [ "$NO_DS" -eq 0 ]; then
  pass "All UI components import from @guidy/ds"
else
  warn "UI components NOT importing @guidy/ds ($NO_DS files):$NO_DS_FILES"
fi

# ── 8. Duplicate hook names across features ──────────
echo "Checking for duplicate hook names across features..."
DUPE_HOOKS=$(find apps/web/*/src -name 'use*.ts' ! -name '*.test.*' ! -name '*.d.ts' \
  ! -path '*/node_modules/*' -exec basename {} \; | sort | uniq -d || true)

if [ -z "$DUPE_HOOKS" ]; then
  pass "No duplicate hook filenames across features"
else
  warn "Duplicate hook names found (possible consolidation):\n  $DUPE_HOOKS"
fi

# Print summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  DRY Audit Report"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
for r in "${RESULTS[@]}"; do
  echo -e "  $r"
done
echo ""
echo -e "  ${GREEN}Passed: $PASS${NC}  ${YELLOW}Warnings: $WARN${NC}  ${RED}Failed: $FAIL${NC}"
echo ""

if [ "$FAIL" -gt 0 ]; then
  echo -e "  ${RED}✖ DRY audit FAILED. Fix violations before pushing.${NC}"
  echo ""
  exit 1
else
  echo -e "  ${GREEN}✔ DRY audit PASSED.${NC}"
  echo ""
  exit 0
fi
