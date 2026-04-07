import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GuidyMascot } from './GuidyMascot';

describe('GuidyMascot', () => {
  it('renders the mascot SVG', () => {
    render(<GuidyMascot />);
    expect(screen.getByLabelText('Guidy mascot')).toBeInTheDocument();
  });

  it('renders as an img role', () => {
    render(<GuidyMascot />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('accepts a custom size', () => {
    const { container } = render(<GuidyMascot size={300} />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('width')).toBe('300');
    const expectedHeight = String((300 * 240) / 220);
    expect(svg?.getAttribute('height')).toBe(expectedHeight);
  });
});
