import type { Preview } from 'storybook/internal/types';
import '../src/styles/tokens.css';
import '../src/styles/reset.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121212' },
        { name: 'surface', value: '#282828' },
        { name: 'light', value: '#FFFFFF' },
      ],
    },
  },
};

export default preview;
