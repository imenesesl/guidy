import type { Meta, StoryObj } from '@storybook/react';
import '@i18n/index';
import { BenefitsSection } from './BenefitsSection';

const meta: Meta<typeof BenefitsSection> = {
  title: 'Landing/BenefitsSection',
  component: BenefitsSection,
};

export default meta;
type Story = StoryObj<typeof BenefitsSection>;

export const Default: Story = {};
