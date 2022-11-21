import React from 'react';

import { addDecorator } from '@storybook/react';

import { ReturnComponentType } from '@/commonTypes';
import Image from '@/components/Image';
import FirstSection from '@/components/Main/Home/SectionOne';
import FirstButtonSection from '@/components/Main/Home/SectionOne/FirstButtonSection';
import FirstSelectionWordText from '@/components/Main/Home/SectionOne/FirstSelectionWordText';
import TextContainer from '@/components/Text';
import { PNG } from '@/constants';
import GlobalStyles from '@/globalStyles';
import { HomePageSection } from '@/mocks';
import theme from '@/theme';

const { HomeFirstSection } = HomePageSection;
const { FirstImageHomeSection } = PNG;

export default {
  title: 'FirstSection',
  component: FirstSection,
};

const Template = (): ReturnComponentType => (
  <>
    <FirstSection
      text={<TextContainer text={HomeFirstSection.text} bottom={theme.spaces[6]} />}
      title={<FirstSelectionWordText />}
      spacing={theme.spaces[12]}
      flex={{ alignItems: 'flex-start' }}
    >
      <FirstButtonSection />
    </FirstSection>
    <Image context={FirstImageHomeSection} />
  </>
);

export const FirstSectionExample = Template.bind({});

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
));
