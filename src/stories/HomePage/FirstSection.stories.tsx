import React from 'react';

import { ReturnComponentType } from 'src/commonTypes';
import Image from 'src/components/Image';
import FirstSection from 'src/components/Main/Home/SectionOne';
import FirstButtonSection from 'src/components/Main/Home/SectionOne/FirstButtonSection';
import FirstSelectionWordText from 'src/components/Main/Home/SectionOne/FirstSelectionWordText';
import TextContainer from 'src/components/Text';
import { PNG } from 'src/constants';
import { HomePageSection } from 'src/mocks';
import theme from 'src/theme';

const { HomeFirstSection } = HomePageSection;
const { FirstImageHomeSection } = PNG;

export default {
  title: 'HomePageSections',
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
