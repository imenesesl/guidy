import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { Text } from '../Text/Text';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <div>
        <Text variant="body" color="primary">Content above</Text>
        <Story />
        <Text variant="body" color="primary">Content below</Text>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
