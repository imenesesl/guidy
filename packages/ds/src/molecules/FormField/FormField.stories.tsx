import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { Input } from '../../atoms/Input/Input';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  argTypes: {
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    label: 'Email address',
    children: <Input placeholder="name@example.com" />,
  },
};

export const Required: Story = {
  args: {
    label: 'Username',
    required: true,
    children: <Input placeholder="Choose a username" />,
  },
};

export const WithHint: Story = {
  args: {
    label: 'Password',
    hint: 'At least 8 characters',
    children: <Input type="password" placeholder="Create a password" />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email address',
    error: 'This email is already registered',
    required: true,
    children: <Input error placeholder="name@example.com" />,
  },
};
