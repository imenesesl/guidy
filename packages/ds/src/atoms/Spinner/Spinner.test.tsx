import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders an svg element', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies spinner class', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('svg')).toHaveClass('spinner');
  });

  it('applies size class', () => {
    const { container } = render(<Spinner size="lg" />);
    expect(container.querySelector('svg')).toHaveClass('lg');
  });

  it('merges custom className', () => {
    const { container } = render(<Spinner className="extra" />);
    expect(container.querySelector('svg')).toHaveClass('extra');
  });
});
