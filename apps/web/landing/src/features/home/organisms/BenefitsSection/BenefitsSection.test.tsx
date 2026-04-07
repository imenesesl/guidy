import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BenefitsSection } from './BenefitsSection';

describe('BenefitsSection', () => {
  it('renders the heading', () => {
    render(<BenefitsSection />);
    expect(screen.getByText('Everyone wins. For real.')).toBeInTheDocument();
  });

  it('renders teacher benefits', () => {
    render(<BenefitsSection />);
    expect(screen.getByText("If you're a teacher...")).toBeInTheDocument();
    expect(screen.getByText('No more drowning in homework piles')).toBeInTheDocument();
  });

  it('renders student benefits', () => {
    render(<BenefitsSection />);
    expect(screen.getByText("If you're a student...")).toBeInTheDocument();
    expect(screen.getByText('Learn at your own pace, zero pressure')).toBeInTheDocument();
  });

  it('renders institution benefits', () => {
    render(<BenefitsSection />);
    expect(screen.getByText("If you're a school...")).toBeInTheDocument();
  });

  it('renders Lucide icons for roles and check bullets', () => {
    const { container } = render(<BenefitsSection />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(12);
  });
});
