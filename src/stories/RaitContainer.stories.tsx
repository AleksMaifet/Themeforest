import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Rate from '@/components/Main/Home/SectionFifth/Rate';
import { HomePageSection } from '@/mocks';

export default {
  title: 'Containers',
  component: Rate,
};

const {
  HomeSixthSection: { tariffs },
} = HomePageSection;

const Template = (): ReturnComponentType => <Rate value={tariffs[0]} />;

export const RateExample = Template.bind({});
