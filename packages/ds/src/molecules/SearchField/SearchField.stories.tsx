import type { Meta, StoryObj } from '@storybook/react';
import { SearchField } from './SearchField';

const meta: Meta<typeof SearchField> = {
  title: 'Molecules/SearchField',
  component: SearchField,
  argTypes: {
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: { placeholder: 'What do you want to listen to?' },
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Search songs, artists, or podcasts',
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Search unavailable',
    disabled: true,
  },
};
