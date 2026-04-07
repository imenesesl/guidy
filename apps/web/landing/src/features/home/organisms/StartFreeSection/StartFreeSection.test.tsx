import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StartFreeSection } from './StartFreeSection';

describe('StartFreeSection', () => {
  it('renders the heading', () => {
    render(<StartFreeSection />);
    expect(screen.getByText("Go on, it's free")).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<StartFreeSection />);
    expect(screen.getByText(/No tricks/)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<StartFreeSection />);
    expect(screen.getByText("Let's go")).toBeInTheDocument();
  });

  it('renders rocket icon', () => {
    const { container } = render(<StartFreeSection />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });
});
