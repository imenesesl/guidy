import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroSection } from './HeroSection';

describe('HeroSection', () => {
  it('renders the main title', () => {
    render(<HeroSection />);
    expect(screen.getByText('Your class, but with superpowers')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<HeroSection />);
    expect(screen.getByText(/You stop grading at 2am/)).toBeInTheDocument();
  });

  it('renders teacher CTA', () => {
    render(<HeroSection />);
    expect(screen.getByText("I'm a teacher")).toBeInTheDocument();
  });

  it('renders institution CTA', () => {
    render(<HeroSection />);
    expect(screen.getByText("I'm a school")).toBeInTheDocument();
  });

  it('renders interested CTA', () => {
    render(<HeroSection />);
    expect(screen.getByText('Tell me more')).toBeInTheDocument();
  });

  it('renders the Guidy mascot', () => {
    render(<HeroSection />);
    expect(
      screen.getByLabelText('Guidy mascot walking with a book and a phone'),
    ).toBeInTheDocument();
  });
});
