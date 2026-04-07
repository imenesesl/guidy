import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders the header brand', () => {
    render(<HomePage />);
    expect(screen.getByText('Guidy')).toBeInTheDocument();
  });

  it('renders the hero title', () => {
    render(<HomePage />);
    expect(screen.getByText('Your class, but with superpowers')).toBeInTheDocument();
  });

  it('renders the features section', () => {
    render(<HomePage />);
    expect(screen.getByText("Here's how the magic works")).toBeInTheDocument();
  });

  it('renders the benefits section', () => {
    render(<HomePage />);
    expect(screen.getByText('Everyone wins. For real.')).toBeInTheDocument();
  });

  it('renders the start free section', () => {
    render(<HomePage />);
    expect(screen.getByText("Go on, it's free")).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<HomePage />);
    expect(screen.getByText(/2026 Guidy/)).toBeInTheDocument();
  });
});
