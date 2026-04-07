import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@guidy/ds';
import { ErrorBoundary } from './ErrorBoundary';

function ThrowOnRender(): never {
  throw new Error('This component crashed intentionally');
}

const meta: Meta<typeof ErrorBoundary> = {
  title: 'App/ErrorBoundary',
  component: ErrorBoundary,
};

export default meta;
type Story = StoryObj<typeof ErrorBoundary>;

export const WithError: Story = {
  render: () => (
    <ErrorBoundary>
      <ThrowOnRender />
    </ErrorBoundary>
  ),
};

export const WithChildren: Story = {
  render: () => (
    <ErrorBoundary>
      <Text variant="body-large">Everything is working fine</Text>
    </ErrorBoundary>
  ),
};
