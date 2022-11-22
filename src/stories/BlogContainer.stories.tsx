import React from 'react';

import { addDecorator } from '@storybook/react';

import { ReturnComponentType } from '@/commonTypes';
import Blog from '@/components/Main/Home/SwiperSection/Blog';
import GlobalStyles from '@/globalStyles';
import { HomePageSection } from '@/mocks';

export default {
  title: 'Containers',
  component: Blog,
};

const {
  HomeSeventhSection: { blogs },
} = HomePageSection;

const Template = (): ReturnComponentType => <Blog value={blogs[0]} />;

export const BlogContainerExample = Template.bind({});

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
));
