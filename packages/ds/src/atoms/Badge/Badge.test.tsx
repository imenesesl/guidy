import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies default variant class', () => {
    render(<Badge>Tag</Badge>);
    expect(screen.getByText('Tag')).toHaveClass('default');
  });

  it('applies success variant class', () => {
    render(<Badge variant="success">Active</Badge>);
    expect(screen.getByText('Active')).toHaveClass('success');
  });

  it('applies error variant class', () => {
    render(<Badge variant="error">Offline</Badge>);
    expect(screen.getByText('Offline')).toHaveClass('error');
  });

  it('merges custom className', () => {
    render(<Badge className="extra">Custom</Badge>);
    expect(screen.getByText('Custom')).toHaveClass('extra');
  });
});
