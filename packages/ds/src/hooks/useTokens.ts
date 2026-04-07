import { colors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { radii } from '../tokens/radii';
import { shadows } from '../tokens/shadows';
import { fontFamily, fontSize, fontWeight, lineHeight, textStyles } from '../tokens/typography';

export interface DesignTokens {
  colors: typeof colors;
  spacing: typeof spacing;
  radii: typeof radii;
  shadows: typeof shadows;
  fontFamily: typeof fontFamily;
  fontSize: typeof fontSize;
  fontWeight: typeof fontWeight;
  lineHeight: typeof lineHeight;
  textStyles: typeof textStyles;
}

export function useTokens(): DesignTokens {
  return {
    colors,
    spacing,
    radii,
    shadows,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    textStyles,
  };
}
