const path = require('path');
module.exports = {
  webpackFinal: async (config) => {
    config.resolve.alias['src'] = path.resolve(__dirname, '..', 'src');
    config.resolve.alias['components'] = path.resolve(
      __dirname,
      '..',
      'components',
    );

    // Return the altered config
    return config;
  },
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-jest',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
  ],
};
