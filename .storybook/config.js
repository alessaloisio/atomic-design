import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { withThemesProvider } from 'themeprovider-storybook';
import { loadFontsForStorybook } from '../src/utils/index';

import { GlobalStyle } from '../src/components/shared/global';

addParameters({
  options: {
    showRoots: true,
    brandTitle: 'Atomic Design',
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

const themes = [
  {
    name: 'Theme1',
    backgroundColor: '#fff', // Optional, it's used for setting dynamic background color on storybook
  },
  {
    name: 'Theme2',
    backgroundColor: '#000', // Optional, it's used for setting dynamic background color on storybook
  },
];
addDecorator(withThemesProvider(themes));

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
  ],
  module
);

loadFontsForStorybook();
