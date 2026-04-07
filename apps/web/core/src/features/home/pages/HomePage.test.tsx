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
    expect(screen.getByText('Your monorepo is ready')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<HomePage />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('renders search field', () => {
    render(<HomePage />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders chip filters', () => {
    render(<HomePage />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Components')).toBeInTheDocument();
    expect(screen.getByText('Tokens')).toBeInTheDocument();
  });

  it('renders design system card', () => {
    render(<HomePage />);
    expect(screen.getByText('Design System')).toBeInTheDocument();
    expect(screen.getByText('Ready')).toBeInTheDocument();
  });

  it('renders core app card', () => {
    render(<HomePage />);
    expect(screen.getByText('Core App')).toBeInTheDocument();
  });
});
