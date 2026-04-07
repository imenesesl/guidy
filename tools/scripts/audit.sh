#!/usr/bin/env bash
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

PASS=0
FAIL=0
RESULTS=()

check() {
  local name="$1"
  shift
  if "$@" > /dev/null 2>&1; then
    RESULTS+=("${GREEN}[PASS]${NC} $name")
    PASS=$((PASS + 1))
  else
    RESULTS+=("${RED}[FAIL]${NC} $name")
    FAIL=$((FAIL + 1))
  fi
}

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  GUIDY — Full Quality Gate Audit"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 1. Node.js version
echo "Checking Node.js version..."
NODE_MAJOR=$(node -v | cut -d. -f1 | tr -d 'v')
check "Node.js 22" [ "$NODE_MAJOR" -ge 22 ]

# 2. pnpm available
echo "Checking pnpm..."
check "pnpm installed" command -v pnpm

# 3. ESLint (all packages)
echo "Running ESLint..."
check "ESLint — zero errors" pnpm -r --if-present run lint

# 4. Stylelint (CSS modules — no hardcoded values)
echo "Running Stylelint (no hardcoded colors, spacing, sizing)..."
check "Stylelint — no hardcoded values in CSS" pnpm lint:css

# 5. TypeScript strict
echo "Running TypeScript typecheck..."
check "TypeScript strict — zero errors" pnpm typecheck

# 6. Tests
echo "Running tests..."
check "All tests passing" pnpm test

# 7. Build apps
echo "Building apps..."
check "Build core — compiles" pnpm build:core
check "Build landing — compiles" pnpm build:landing

# 8. Storybook builds
echo "Building Storybooks..."
check "Storybook DS — builds" pnpm storybook:build:ds
check "Storybook Core — builds" pnpm storybook:build:core
check "Storybook Landing — builds" pnpm storybook:build:landing

# 9. Storybook coverage — every component has a .stories.tsx
echo "Checking Storybook coverage..."
MISSING_STORIES=""
while IFS= read -r comp; do
  dir=$(dirname "$comp")
  base=$(basename "$comp" .tsx)
  story="$dir/$base.stories.tsx"
  if [ ! -f "$story" ]; then
    MISSING_STORIES="$MISSING_STORIES\n  $comp (missing $base.stories.tsx)"
  fi
done < <(find packages/ds/src/atoms packages/ds/src/molecules apps/web/core/src apps/web/landing/src -name '*.tsx' ! -name '*.stories.tsx' ! -name '*.test.tsx' ! -name 'index.ts' ! -name 'index.tsx' ! -name 'main.tsx' ! -name 'test-setup.ts' ! -path '*/node_modules/*')

if [ -z "$MISSING_STORIES" ]; then
  RESULTS+=("${GREEN}[PASS]${NC} Every component has a Storybook story")
  PASS=$((PASS + 1))
else
  RESULTS+=("${RED}[FAIL]${NC} Components missing stories:$MISSING_STORIES")
  FAIL=$((FAIL + 1))
fi

# 10. Test coverage — every component has a .test.tsx
echo "Checking test coverage..."
MISSING_TESTS=""
while IFS= read -r comp; do
  dir=$(dirname "$comp")
  base=$(basename "$comp" .tsx)
  test_file="$dir/$base.test.tsx"
  if [ ! -f "$test_file" ]; then
    MISSING_TESTS="$MISSING_TESTS\n  $comp (missing $base.test.tsx)"
  fi
done < <(find packages/ds/src/atoms packages/ds/src/molecules apps/web/core/src apps/web/landing/src -name '*.tsx' ! -name '*.stories.tsx' ! -name '*.test.tsx' ! -name 'index.ts' ! -name 'index.tsx' ! -name 'main.tsx' ! -name 'test-setup.ts' ! -path '*/node_modules/*')

if [ -z "$MISSING_TESTS" ]; then
  RESULTS+=("${GREEN}[PASS]${NC} Every component has a test file")
  PASS=$((PASS + 1))
else
  RESULTS+=("${RED}[FAIL]${NC} Components missing tests:$MISSING_TESTS")
  FAIL=$((FAIL + 1))
fi

# Print summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Quality Gate Report"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
for r in "${RESULTS[@]}"; do
  echo -e "  $r"
done
echo ""
echo -e "  ${GREEN}Passed: $PASS${NC}  ${RED}Failed: $FAIL${NC}"
echo ""

if [ "$FAIL" -gt 0 ]; then
  echo -e "  ${RED}✖ Quality gate FAILED. Fix issues before pushing.${NC}"
  echo ""
  exit 1
else
  echo -e "  ${GREEN}✔ Quality gate PASSED. Ready to push.${NC}"
  echo ""
  exit 0
fi
