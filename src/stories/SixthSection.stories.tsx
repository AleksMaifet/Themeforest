import React from 'react';

import { addDecorator } from '@storybook/react';

import { ReturnComponentType } from '@/commonTypes';
import SixthSection from '@/components/Main/Home/SectionSixth';
import GlobalStyles from '@/globalStyles';

export default {
  title: 'Section',
  component: SixthSection,
};

const Template = (): ReturnComponentType => <SixthSection />;

export const SixthSectionExample = Template.bind({});

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
));
