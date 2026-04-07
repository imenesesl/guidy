/**
 * Programmatic access to design tokens.
 * Source of truth: packages/ds/src/styles/tokens.css
 * Keep in sync with CSS custom properties (--ds-*).
 */
export const durations = {
  fast: '100ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

export const easings = {
  default: 'cubic-bezier(0.3, 0, 0, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const transitions = {
  fast: `${durations.fast} ${easings.default}`,
  normal: `${durations.normal} ${easings.default}`,
  slow: `${durations.slow} ${easings.default}`,
} as const;
