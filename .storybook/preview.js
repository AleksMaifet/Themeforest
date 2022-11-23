import { addDecorator } from '@storybook/react';
import { Decorator } from './decorator';

addDecorator(Decorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
