import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useLanguage } from './useLanguage';

describe('useLanguage', () => {
  it('returns the current language', () => {
    const { result } = renderHook(() => useLanguage());
    expect(result.current.language).toBe('en');
  });

  it('toggles language from en to es', () => {
    const { result } = renderHook(() => useLanguage());
    act(() => {
      result.current.toggle();
    });
    expect(result.current.language).toBe('es');
  });
});
