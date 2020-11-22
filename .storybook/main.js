module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    '../src/app/components/**/*.stories.ts'
  ],
  "addons": [
    '@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'
  ]
}
