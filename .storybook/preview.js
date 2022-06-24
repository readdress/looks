import React from 'react'
import ThemeProvider from '../src/theme'
import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  layout: 'centered',
  backgrounds: {
    values: [
      {
        name: 'light',
        value: '#F4F5FA',
      },
      {
        name: 'dark',
        value: '#1b2431',
      },
    ],
  },
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: '#1b2431'
    },
    light: {
      ...themes.normal,
      appBg: '#F4F5FA'
    }
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider colorMode={useDarkMode() ? 'dark' : 'light'}>
      {Story()}
    </ThemeProvider>
  ),
];
