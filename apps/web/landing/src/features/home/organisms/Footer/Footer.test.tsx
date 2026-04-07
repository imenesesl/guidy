import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the tagline', () => {
    render(<Footer />);
    expect(screen.getByText(/Made with love/)).toBeInTheDocument();
  });

  it('renders copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/2026 Guidy/)).toBeInTheDocument();
  });
});
