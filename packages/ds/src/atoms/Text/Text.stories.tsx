import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'body-large',
        'body',
        'body-small',
        'caption',
        'overline',
      ],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'subdued', 'disabled', 'brand', 'error', 'inverse'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args: { children: 'Good evening', variant: 'heading-1' },
};

export const Heading2: Story = {
  args: { children: 'Recently Played', variant: 'heading-2' },
};

export const Body: Story = {
  args: { children: 'Listen to your favorite tracks', variant: 'body' },
};

export const BodySmall: Story = {
  args: { children: '3:24', variant: 'body-small', color: 'subdued' },
};

export const Caption: Story = {
  args: { children: '2024 · Album', variant: 'caption', color: 'secondary' },
};

export const Overline: Story = {
  args: { children: 'PLAYLIST', variant: 'overline', color: 'subdued' },
};

export const BrandColor: Story = {
  args: { children: 'Premium', variant: 'body', color: 'brand' },
};

export const ErrorColor: Story = {
  args: { children: 'Required field', variant: 'body-small', color: 'error' },
};
