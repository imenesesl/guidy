import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import styles from './Chip.stories.module.css';

const meta: Meta<typeof Chip> = {
  title: 'Molecules/Chip',
  component: Chip,
  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { children: 'Pop' },
};

export const Selected: Story = {
  args: { children: 'Rock', selected: true },
};

export const Group: Story = {
  render: () => (
    <div className={styles['group']}>
      <Chip selected>All</Chip>
      <Chip>Music</Chip>
      <Chip>Podcasts</Chip>
      <Chip>Live Events</Chip>
    </div>
  ),
};
