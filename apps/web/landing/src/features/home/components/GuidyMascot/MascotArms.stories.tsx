import type { Meta, StoryObj } from '@storybook/react';
import { MascotArms } from './MascotArms';

const walkCycle = {
  duration: 0.8,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

const meta: Meta<typeof MascotArms> = {
  title: 'Landing/MascotArms',
  component: MascotArms,
};

export default meta;
type Story = StoryObj<typeof MascotArms>;

export const Default: Story = {
  render: () => (
    <svg viewBox="0 0 220 240" width={220} height={240}>
      <MascotArms walkCycle={walkCycle} />
    </svg>
  ),
};
