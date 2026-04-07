import type { Meta, StoryObj } from '@storybook/react';
import { WavesDivider } from './WavesDivider';

const meta: Meta<typeof WavesDivider> = {
  title: 'Atoms/WavesDivider',
  component: WavesDivider,
};

export default meta;
type Story = StoryObj<typeof WavesDivider>;

export const Smooth: Story = { args: { variant: 'smooth' } };
export const Sharp: Story = { args: { variant: 'sharp' } };
export const Flipped: Story = { args: { variant: 'smooth', flip: true } };
