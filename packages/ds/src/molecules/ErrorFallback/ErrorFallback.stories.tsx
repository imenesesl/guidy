import type { Meta, StoryObj } from '@storybook/react';
import { ErrorFallback } from './ErrorFallback';

const meta: Meta<typeof ErrorFallback> = {
  title: 'Molecules/ErrorFallback',
  component: ErrorFallback,
};

export default meta;
type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {
  args: {
    title: 'Something went wrong',
    message: 'An unexpected error occurred',
    buttonLabel: 'Try again',
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Something went wrong',
  },
};

export const WithMessage: Story = {
  args: {
    title: 'Something went wrong',
    message: 'Unable to load the requested resource',
    buttonLabel: 'Retry',
  },
};
