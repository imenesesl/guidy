import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders an hr element', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('applies divider class', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toHaveClass('divider');
  });

  it('merges custom className', () => {
    const { container } = render(<Divider className="extra" />);
    expect(container.querySelector('hr')).toHaveClass('extra');
  });
});
