import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Blog from '@/components/SwiperComponent/Blog';
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
