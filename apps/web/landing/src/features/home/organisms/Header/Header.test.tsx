import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('renders the brand name', () => {
    render(<Header />);
    expect(screen.getByText('Guidy')).toBeInTheDocument();
  });

  it('renders the login CTA', () => {
    render(<Header />);
    expect(screen.getByText('Log in')).toBeInTheDocument();
  });

  it('renders the language toggle', () => {
    render(<Header />);
    expect(screen.getByLabelText('Change language')).toBeInTheDocument();
  });

  it('renders a globe icon instead of emoji flags', () => {
    const { container } = render(<Header />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });
});
