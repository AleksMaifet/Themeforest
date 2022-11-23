import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Footer from '@/components/Footer';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (): ReturnComponentType => <Footer />;

export const FooterExample = Template.bind({});
