import type { Meta, StoryObj } from '@storybook/react';
import '@i18n/index';
import { HeroSection } from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Landing/HeroSection',
  component: HeroSection,
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
