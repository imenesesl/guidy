import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: 'New' },
};

export const Success: Story = {
  args: { children: 'Active', variant: 'success' },
};

export const Error: Story = {
  args: { children: 'Offline', variant: 'error' },
};

export const Warning: Story = {
  args: { children: 'Expiring', variant: 'warning' },
};

export const Info: Story = {
  args: { children: 'Beta', variant: 'info' },
};
