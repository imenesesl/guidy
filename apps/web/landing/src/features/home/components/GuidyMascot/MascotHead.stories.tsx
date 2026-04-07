import type { Meta, StoryObj } from '@storybook/react';
import { MascotHead } from './MascotHead';

const walkCycle = {
  duration: 0.8,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

const meta: Meta<typeof MascotHead> = {
  title: 'Landing/MascotHead',
  component: MascotHead,
};

export default meta;
type Story = StoryObj<typeof MascotHead>;

export const Default: Story = {
  render: () => (
    <svg viewBox="0 0 220 240" width={220} height={240}>
      <MascotHead walkCycle={walkCycle} />
    </svg>
  ),
};
