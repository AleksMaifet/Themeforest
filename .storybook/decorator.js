import React from 'react';
import { HashRouter } from 'react-router-dom';
import GlobalStyles from '../src/globalStyles';


export const Decorator = storyFn => (
    <HashRouter>
      <GlobalStyles />
      {storyFn()}
    </HashRouter>
);
