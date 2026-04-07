import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../../atoms/Text/Text';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'surface', 'outlined'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <Text variant="heading-4">Daily Mix 1</Text>
        <Text variant="body-small" color="subdued">
          Based on your recent listening
        </Text>
      </div>
    ),
  },
};

export const Surface: Story = {
  args: {
    variant: 'surface',
    children: (
      <div>
        <Text variant="heading-4">Discover Weekly</Text>
        <Text variant="body-small" color="subdued">
          Your personal playlist
        </Text>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <Text variant="body">Track details</Text>
        <Text variant="caption" color="secondary">
          3:45 · Album name
        </Text>
      </div>
    ),
  },
};
