import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from '@/components/Image';
import SectionFifth from '@/components/Main/Home/SectionFifth';
import HomeSectionOne from '@/components/Main/Home/SectionOne';
import SectionThree from '@/components/Main/Home/SectionThree';
import HomeSectionTwo from '@/components/Main/Home/SectionTwo';
import TextContainer from '@/components/Text';
import TitleContainer from '@/components/Title';
import { ANALYTICS_BUTTON_TITLE, NEW_SOLUTION_BUTTON_TITLE, PNG } from '@/constants';
import { HomePageSection } from '@/mocks';
import theme from '@/theme';

import ButtonFirstSection from './SectionOne/ButtonFirstSection';
import FirstSelectionWordText from './SectionOne/FirstSelectionWordText';
import SecondSelectionWordText from './SectionOne/SecondSelectionWordText';
import { MainContainer } from './styles';

const { HomeFirstSection, HomeSecondSection, HomeThirdSection, HomeFourthSection } =
  HomePageSection;
const { FirstImageHomeSection, SecondImageHomeSection } = PNG;

const sectionStyle = [
  { alignItems: 'flex-start' },
  { justifyContent: 'center', alignItems: 'center' },
];

const HomePageMain = (): ReturnComponentType => (
  <MainContainer>
    <HomeSectionOne
      text={HomeFirstSection.text}
      title={<FirstSelectionWordText />}
      spacing={theme.spaces[12]}
      flex={sectionStyle[0]}
    >
      <ButtonFirstSection />
    </HomeSectionOne>
    <Image context={FirstImageHomeSection} />
    <HomeSectionOne
      text={HomeSecondSection.text}
      title={<SecondSelectionWordText />}
      spacing={theme.spaces[17]}
      flex={sectionStyle[1]}
    >
      <PrimaryButton title={ANALYTICS_BUTTON_TITLE} />
    </HomeSectionOne>
    <HomeSectionTwo
      title={<TitleContainer title={HomeThirdSection.title} />}
      text={
        <TextContainer
          text={HomeThirdSection.text}
          top={theme.spaces[6]}
          bottom={theme.spaces[6]}
        />
      }
      image={<Image context={SecondImageHomeSection} />}
    >
      <PrimaryButton title={NEW_SOLUTION_BUTTON_TITLE} />
    </HomeSectionTwo>
    <SectionThree title={HomeFourthSection.title} text={HomeFourthSection.text} />
    <SectionFifth />
  </MainContainer>
);

export default HomePageMain;
