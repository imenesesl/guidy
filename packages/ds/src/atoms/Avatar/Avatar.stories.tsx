import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    name: 'John Doe',
    src: 'https://i.pravatar.cc/150?u=john',
    size: 'md',
  },
};

export const Fallback: Story = {
  args: { name: 'Jane Smith', size: 'md' },
};

export const Small: Story = {
  args: { name: 'AB', size: 'sm' },
};

export const Large: Story = {
  args: { name: 'Carlos López', size: 'lg' },
};

export const ExtraLarge: Story = {
  args: {
    name: 'Artist Name',
    src: 'https://i.pravatar.cc/300?u=artist',
    size: 'xl',
  },
};
