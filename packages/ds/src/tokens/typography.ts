export const fontFamily = {
  sans: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
} as const;

export const fontSize = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  '4xl': '2.5rem',  // 40px
  '5xl': '3rem',    // 48px
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  bold: '700',
  black: '900',
} as const;

export const lineHeight = {
  tight: '1.1',
  snug: '1.25',
  normal: '1.4',
  relaxed: '1.6',
} as const;

export const letterSpacing = {
  tight: '-0.04em',
  normal: '0',
  wide: '0.1em',
  wider: '0.2em',
} as const;

export const textStyles = {
  'heading-1': { fontSize: fontSize['5xl'], fontWeight: fontWeight.black, lineHeight: lineHeight.tight, letterSpacing: letterSpacing.tight },
  'heading-2': { fontSize: fontSize['4xl'], fontWeight: fontWeight.bold, lineHeight: lineHeight.tight, letterSpacing: letterSpacing.tight },
  'heading-3': { fontSize: fontSize['3xl'], fontWeight: fontWeight.bold, lineHeight: lineHeight.snug },
  'heading-4': { fontSize: fontSize['2xl'], fontWeight: fontWeight.bold, lineHeight: lineHeight.snug },
  'heading-5': { fontSize: fontSize.xl, fontWeight: fontWeight.bold, lineHeight: lineHeight.snug },
  'body-large': { fontSize: fontSize.lg, fontWeight: fontWeight.regular, lineHeight: lineHeight.normal },
  'body': { fontSize: fontSize.base, fontWeight: fontWeight.regular, lineHeight: lineHeight.normal },
  'body-small': { fontSize: fontSize.sm, fontWeight: fontWeight.regular, lineHeight: lineHeight.normal },
  'caption': { fontSize: fontSize.xs, fontWeight: fontWeight.regular, lineHeight: lineHeight.normal, letterSpacing: letterSpacing.wide },
  'overline': { fontSize: fontSize.xs, fontWeight: fontWeight.bold, lineHeight: lineHeight.normal, letterSpacing: letterSpacing.wider, textTransform: 'uppercase' as const },
} as const;

export type TextStyle = keyof typeof textStyles;
