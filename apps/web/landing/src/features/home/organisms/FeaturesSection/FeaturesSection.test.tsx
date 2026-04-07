import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FeaturesSection } from './FeaturesSection';

describe('FeaturesSection', () => {
  it('renders the heading', () => {
    render(<FeaturesSection />);
    expect(screen.getByText("Here's how the magic works")).toBeInTheDocument();
  });

  it('renders all three feature titles', () => {
    render(<FeaturesSection />);
    expect(screen.getByText('Every student, their own version')).toBeInTheDocument();
    expect(screen.getByText('Help that makes you think')).toBeInTheDocument();
    expect(screen.getByText('Your class, at a glance')).toBeInTheDocument();
  });

  it('renders feature descriptions', () => {
    render(<FeaturesSection />);
    expect(screen.getByText(/Copying just doesn't work anymore/)).toBeInTheDocument();
    expect(screen.getByText(/infinite patience/)).toBeInTheDocument();
    expect(screen.getByText(/no grading stack required/)).toBeInTheDocument();
  });

  it('renders Lucide icons', () => {
    const { container } = render(<FeaturesSection />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(3);
  });

  it('renders wave dividers', () => {
    const { container } = render(<FeaturesSection />);
    const dividers = container.querySelectorAll('[aria-hidden="true"]');
    expect(dividers.length).toBeGreaterThanOrEqual(2);
  });
});
