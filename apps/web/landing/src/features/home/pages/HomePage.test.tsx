import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@i18n/index';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders welcome title', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to Guidy')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<HomePage />);
    expect(screen.getByText('Your landing page is ready')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<HomePage />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('renders feature cards', () => {
    render(<HomePage />);
    expect(screen.getByText('Fast')).toBeInTheDocument();
    expect(screen.getByText('Type-safe')).toBeInTheDocument();
    expect(screen.getByText('Scalable')).toBeInTheDocument();
  });
});
