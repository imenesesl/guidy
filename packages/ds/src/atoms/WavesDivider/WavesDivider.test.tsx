import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { WavesDivider } from './WavesDivider';

describe('WavesDivider', () => {
  it('renders with aria-hidden', () => {
    const { container } = render(<WavesDivider />);
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('applies variant class', () => {
    const { container } = render(<WavesDivider variant="sharp" />);
    expect(container.firstElementChild?.className).toContain('sharp');
  });

  it('applies flip class when flipped', () => {
    const { container } = render(<WavesDivider flip />);
    expect(container.firstElementChild?.className).toContain('flip');
  });

  it('defaults to smooth variant', () => {
    const { container } = render(<WavesDivider />);
    expect(container.firstElementChild?.className).toContain('smooth');
  });
});
