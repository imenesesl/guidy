import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MascotArms } from './MascotArms';

const walkCycle = {
  duration: 0.8,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

function renderArms(): HTMLElement {
  const { container } = render(
    <svg>
      <MascotArms walkCycle={walkCycle} />
    </svg>,
  );
  return container;
}

describe('MascotArms', () => {
  it('renders the book', () => {
    const container = renderArms();
    const bookCover = container.querySelector('rect[fill="#3B82F6"]');
    expect(bookCover).toBeInTheDocument();
  });

  it('renders the phone', () => {
    const container = renderArms();
    const phoneBody = container.querySelector('rect[fill="#1E293B"]');
    expect(phoneBody).toBeInTheDocument();
  });

  it('renders both arm paths', () => {
    const container = renderArms();
    const arms = container.querySelectorAll('path[stroke="#1DB954"]');
    expect(arms).toHaveLength(2);
  });
});
