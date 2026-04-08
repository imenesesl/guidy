import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MascotLegs } from './MascotLegs';

const walkCycle = {
  duration: 0.8,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

function renderLegs(): HTMLElement {
  const { container } = render(
    <svg>
      <MascotLegs walkCycle={walkCycle} />
    </svg>,
  );
  return container;
}

describe('MascotLegs', () => {
  it('renders both legs', () => {
    const container = renderLegs();
    const legRects = container.querySelectorAll('rect[fill="#169C46"]');
    expect(legRects).toHaveLength(2);
  });

  it('renders both feet', () => {
    const container = renderLegs();
    const feet = container.querySelectorAll('ellipse[fill="#128C3A"]');
    expect(feet).toHaveLength(2);
  });
});
