import type { Preview } from '@storybook/react';
import { createElement } from 'react';
import '../../../../packages/ds/src/styles/tokens.css';
import '../../../../packages/ds/src/styles/reset.css';
import './storybook.css';

const preview: Preview = {
  decorators: [
    (Story) =>
      createElement(
        'div',
        { className: 'storybook-canvas' },
        createElement(Story),
      ),
  ],
  initialGlobals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#121212' },
        surface: { name: 'Surface', value: '#282828' },
        light: { name: 'Light', value: '#FFFFFF' },
      },
    },
  },
};

export default preview;
