import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Play', variant: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'Follow', variant: 'secondary' },
};

export const Ghost: Story = {
  args: { children: 'More options', variant: 'ghost' },
};

export const Danger: Story = {
  args: { children: 'Delete', variant: 'danger' },
};

export const Small: Story = {
  args: { children: 'Sm', size: 'sm' },
};

export const Large: Story = {
  args: { children: 'Lg', size: 'lg' },
};

export const FullWidth: Story = {
  args: { children: 'Get Premium', fullWidth: true },
};

export const Disabled: Story = {
  args: { children: 'Unavailable', disabled: true },
};
