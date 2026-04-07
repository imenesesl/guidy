import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@guidy/ds';
import { AppProviders } from './AppProviders';

const meta: Meta<typeof AppProviders> = {
  title: 'App/AppProviders',
  component: AppProviders,
};

export default meta;
type Story = StoryObj<typeof AppProviders>;

export const Default: Story = {
  render: () => (
    <AppProviders>
      <Text variant="body-large">Wrapped in providers</Text>
    </AppProviders>
  ),
};
