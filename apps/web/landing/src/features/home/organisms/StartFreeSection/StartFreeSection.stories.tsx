import type { Meta, StoryObj } from '@storybook/react';
import '@i18n/index';
import { StartFreeSection } from './StartFreeSection';

const meta: Meta<typeof StartFreeSection> = {
  title: 'Landing/StartFreeSection',
  component: StartFreeSection,
};

export default meta;
type Story = StoryObj<typeof StartFreeSection>;

export const Default: Story = {};
