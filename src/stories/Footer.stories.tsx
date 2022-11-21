import React from 'react';

import { addDecorator } from '@storybook/react';

import { ReturnComponentType } from '@/commonTypes';
import Footer from '@/components/Footer';
import GlobalStyles from '@/globalStyles';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (): ReturnComponentType => <Footer />;

export const FooterExample = Template.bind({});

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
));
