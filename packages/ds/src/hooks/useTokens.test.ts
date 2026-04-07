import { describe, it, expect } from 'vitest';
import { useTokens } from './useTokens';

describe('useTokens', () => {
  it('returns all token categories', () => {
    const tokens = useTokens();

    expect(tokens.colors).toBeDefined();
    expect(tokens.spacing).toBeDefined();
    expect(tokens.radii).toBeDefined();
    expect(tokens.shadows).toBeDefined();
    expect(tokens.fontFamily).toBeDefined();
    expect(tokens.fontSize).toBeDefined();
    expect(tokens.fontWeight).toBeDefined();
    expect(tokens.lineHeight).toBeDefined();
    expect(tokens.textStyles).toBeDefined();
  });

  it('contains brand primary color', () => {
    const { colors } = useTokens();
    expect(colors.brand.primary).toBe('#1DB954');
  });

  it('contains spacing scale', () => {
    const { spacing } = useTokens();
    expect(spacing[4]).toBeDefined();
    expect(spacing[8]).toBeDefined();
  });

  it('contains font families', () => {
    const { fontFamily } = useTokens();
    expect(fontFamily.sans).toContain('Google Sans');
  });
});
