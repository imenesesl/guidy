import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    inputSize: { control: 'select', options: ['sm', 'md', 'lg'] },
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Search songs, artists...' },
};

export const Small: Story = {
  args: { placeholder: 'Filter', inputSize: 'sm' },
};

export const Large: Story = {
  args: { placeholder: 'What do you want to listen to?', inputSize: 'lg' },
};

export const WithError: Story = {
  args: { placeholder: 'Email', error: true, value: 'invalid' },
};

export const FullWidth: Story = {
  args: { placeholder: 'Full width input', fullWidth: true },
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true },
};
