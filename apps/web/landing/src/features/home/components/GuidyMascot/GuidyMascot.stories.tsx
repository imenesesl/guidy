import type { Meta, StoryObj } from '@storybook/react';
import { GuidyMascot } from './GuidyMascot';

const meta: Meta<typeof GuidyMascot> = {
  title: 'Landing/GuidyMascot',
  component: GuidyMascot,
  argTypes: {
    size: { control: { type: 'range', min: 80, max: 400, step: 10 } },
  },
};

export default meta;
type Story = StoryObj<typeof GuidyMascot>;

export const Default: Story = {};

export const Small: Story = { args: { size: 120 } };

export const Large: Story = { args: { size: 360 } };
