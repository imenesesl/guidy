/**
 * Programmatic access to design tokens.
 * Source of truth: packages/ds/src/styles/tokens.css
 * Keep in sync with CSS custom properties (--ds-*).
 */
export const colors = {
  brand: {
    primary: '#1DB954',
    primaryHover: '#1ED760',
    primaryPressed: '#169C46',
  },

  background: {
    base: '#121212',
    elevated: '#181818',
    surface: '#282828',
    highlight: '#333333',
    tinted: '#1A1A1A',
    overlay: 'rgba(0, 0, 0, 0.7)',
  },

  text: {
    primary: '#FFFFFF',
    secondary: '#B3B3B3',
    subdued: '#A7A7A7',
    disabled: '#6A6A6A',
    inverse: '#000000',
    brand: '#1DB954',
  },

  border: {
    default: '#333333',
    subtle: '#282828',
    focus: '#FFFFFF',
    error: '#F15E6C',
  },

  status: {
    success: '#1DB954',
    error: '#F15E6C',
    warning: '#FFA42B',
    info: '#2E77D0',
  },

  interactive: {
    default: '#FFFFFF',
    hover: '#FFFFFF',
    pressed: '#B3B3B3',
    disabled: '#535353',
  },
} as const;

export type Colors = typeof colors;
