import type { Meta, StoryObj } from '@storybook/react';
import '@i18n/index';
import { FeaturesSection } from './FeaturesSection';

const meta: Meta<typeof FeaturesSection> = {
  title: 'Landing/FeaturesSection',
  component: FeaturesSection,
};

export default meta;
type Story = StoryObj<typeof FeaturesSection>;

export const Default: Story = {};
