import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MascotHead } from './MascotHead';

const walkCycle = {
  duration: 0.8,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

function renderHead(): HTMLElement {
  const { container } = render(
    <svg>
      <MascotHead walkCycle={walkCycle} />
    </svg>,
  );
  return container;
}

describe('MascotHead', () => {
  it('renders both eyes', () => {
    const container = renderHead();
    const eyes = container.querySelectorAll('ellipse[fill="#0D4A22"]');
    expect(eyes.length).toBeGreaterThanOrEqual(2);
  });

  it('renders the smile', () => {
    const container = renderHead();
    const smile = container.querySelector('path[stroke="#0D4A22"]');
    expect(smile).toBeInTheDocument();
  });

  it('renders the graduation cap tassel', () => {
    const container = renderHead();
    const tassel = container.querySelector('circle[fill="#FBBF24"]');
    expect(tassel).toBeInTheDocument();
  });

  it('renders cheeks', () => {
    const container = renderHead();
    const cheeks = container.querySelectorAll('circle[opacity="0.4"]');
    expect(cheeks).toHaveLength(2);
  });
});
