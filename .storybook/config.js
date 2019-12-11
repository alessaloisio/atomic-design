import React from 'react';

import { configure, addDecorator, addParameters } from '@storybook/react';

// ADDONS
import { withA11y } from '@storybook/addon-a11y'; // accessbibilty
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// APPEARANCES
import { GlobalStyle } from '../src/components/_shared/global';

addParameters({
  options: {
    showRoots: false,
    brandTitle: 'Atomic Design',
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addDecorator(withA11y);

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
  ],
  module
);
