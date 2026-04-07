/**
 * Programmatic access to design tokens.
 * Source of truth: packages/ds/src/styles/tokens.css
 * Keep in sync with CSS custom properties (--ds-*).
 */
export const radii = {
  none: '0',
  sm: '0.25rem', // 4px
  md: '0.5rem', // 8px
  lg: '1rem', // 16px
  xl: '1.5rem', // 24px
  full: '9999px',
} as const;

export type RadiiKey = keyof typeof radii;
