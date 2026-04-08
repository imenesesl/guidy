import type { Meta, StoryObj } from '@storybook/react';
import { MascotLegs } from './MascotLegs';

const walkCycle = {
  duration: 0.8,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

const meta: Meta<typeof MascotLegs> = {
  title: 'Landing/MascotLegs',
  component: MascotLegs,
};

export default meta;
type Story = StoryObj<typeof MascotLegs>;

export const Default: Story = {
  render: () => (
    <svg viewBox="0 0 220 240" width={220} height={240}>
      <MascotLegs walkCycle={walkCycle} />
    </svg>
  ),
};
