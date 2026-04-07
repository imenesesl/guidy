import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders image when src is provided', () => {
    render(<Avatar name="John Doe" src="https://example.com/avatar.jpg" />);
    const img = screen.getByAltText('John Doe');
    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe('IMG');
  });

  it('renders initials fallback when no src', () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('handles single name', () => {
    render(<Avatar name="Alice" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('applies size class to image', () => {
    render(<Avatar name="Test" src="https://example.com/a.jpg" size="lg" />);
    expect(screen.getByAltText('Test')).toHaveClass('lg');
  });

  it('applies size class to fallback', () => {
    const { container } = render(<Avatar name="AB" size="xl" />);
    expect(container.firstChild).toHaveClass('xl');
  });
});
