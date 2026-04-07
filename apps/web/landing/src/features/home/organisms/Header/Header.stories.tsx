import type { Meta, StoryObj } from '@storybook/react';
import '@i18n/index';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Landing/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
