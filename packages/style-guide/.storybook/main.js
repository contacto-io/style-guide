
import { mergeConfig } from 'vite'
import path from 'path'
import svgr from 'vite-plugin-svgr'

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],

  staticDirs: ['../static'],

  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    // Provide your own options if necessary.
    // See https://storybook.js.org/docs/configure/typescript for more information.
    reactDocgenTypescriptOptions: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [
        svgr({
          svgrOptions: {
            exportType: 'default',
          },
        }),
      ],
      resolve: {
        alias: [
          { find: '~antd', replacement: path.resolve(__dirname, '../node_modules/antd') },
          { find: '~simplebar', replacement: path.resolve(__dirname, '../node_modules/simplebar') },
          { find: "@", replacement: path.resolve(__dirname, "../src") },
        ],
      },
    })
  },
}

