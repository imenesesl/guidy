import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Blob } from './Blob';

describe('Blob', () => {
  it('renders with aria-hidden', () => {
    const { container } = render(<Blob />);
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('applies variant class', () => {
    const { container } = render(<Blob variant="2" />);
    expect(container.firstElementChild?.className).toContain('v2');
  });

  it('applies color class', () => {
    const { container } = render(<Blob color="purple" />);
    expect(container.firstElementChild?.className).toContain('purple');
  });

  it('defaults to variant 1 and brand color', () => {
    const { container } = render(<Blob />);
    const cls = container.firstElementChild?.className ?? '';
    expect(cls).toContain('v1');
    expect(cls).toContain('brand');
  });
});
