import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 3.3C6.7 1.5 4.1 1 2.4 2.5S0 6.2 0.8 8c1 2.2 4.5 5.3 6.7 6.9.3.2.7.2 1 0 2.2-1.6 5.7-4.7 6.7-6.9.8-1.8.3-4.2-1.4-5.5C12.1 1 9.5 1.5 8 3.3z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M3 1.7v12.6c0 .6.7 1 1.2.7l10-6.3c.5-.3.5-1 0-1.4l-10-6.3C3.7.7 3 1.1 3 1.7z" />
  </svg>
);

export const Default: Story = {
  args: { label: 'Like', children: <HeartIcon /> },
};

export const Small: Story = {
  args: { label: 'Play', size: 'sm', children: <PlayIcon /> },
};

export const Large: Story = {
  args: { label: 'Like', size: 'lg', children: <HeartIcon /> },
};

export const Disabled: Story = {
  args: { label: 'Like', disabled: true, children: <HeartIcon /> },
};
