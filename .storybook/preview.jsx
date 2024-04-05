import '../src/App.scss'
import React from 'react'
// Replace your-framework with the framework you are using (e.g., react, vue3)
const preview = {
  globalTypes: {
    theme: {
      description: 'Library to use for style-guide components',
      defaultValue: 'shadcn',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Library',
        icon: 'cog',
        // Array of plain string values or MenuItem shape (see below)
        items: ['antd', 'shadcn'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [
    (Story, context) => {
      const library = context.globals.theme;
      window.library = library;
      return (
          <Story />
      );
    },
  ],
};

export default preview;
