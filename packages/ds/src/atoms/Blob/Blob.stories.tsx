import type { Meta, StoryObj } from '@storybook/react';
import { Blob } from './Blob';

const meta: Meta<typeof Blob> = {
  title: 'Atoms/Blob',
  component: Blob,
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '300px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Blob>;

export const Brand: Story = { args: { variant: '1', color: 'brand' } };
export const Blue: Story = { args: { variant: '2', color: 'blue' } };
export const Purple: Story = { args: { variant: '3', color: 'purple' } };
export const Yellow: Story = { args: { variant: '4', color: 'yellow' } };
export const Pink: Story = { args: { variant: '1', color: 'pink' } };
