import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from '@/components/Image';
import FourthSection from '@/components/Main/Home/SectionFourth';
import FirstSection from '@/components/Main/Home/SectionOne';
import SectionThree from '@/components/Main/Home/SectionThree';
import SecondSection from '@/components/Main/Home/SectionTwo';
import TextContainer from '@/components/Text';
import TitleContainer from '@/components/Title';
import { ANALYTICS_BUTTON_TITLE, NEW_SOLUTION_BUTTON_TITLE, PNG } from '@/constants';
import { HomePageSection } from '@/mocks';
import theme from '@/theme';

import FirstButtonSection from './SectionOne/FirstButtonSection';
import FirstSelectionWordText from './SectionOne/FirstSelectionWordText';
import SecondSelectionWordText from './SectionOne/SecondSelectionWordText';
import { MainContainer } from './styles';

const { HomeFirstSection, HomeSecondSection, HomeThirdSection, HomeFourthSection } =
  HomePageSection;
const { FirstImageHomeSection, SecondImageHomeSection, ClientsImageSection } = PNG;

const sectionStyle = [
  { alignItems: 'flex-start' },
  { justifyContent: 'center', alignItems: 'center' },
];

const HomePageMain = (): ReturnComponentType => (
  <MainContainer>
    <FirstSection
      text={<TextContainer text={HomeFirstSection.text} bottom={theme.spaces[6]} />}
      title={<FirstSelectionWordText />}
      spacing={theme.spaces[12]}
      flex={sectionStyle[0]}
    >
      <FirstButtonSection />
    </FirstSection>
    <Image context={FirstImageHomeSection} />
    <FirstSection
      text={<TextContainer text={HomeFirstSection.secondText} bottom={theme.spaces[6]} />}
      title={<SecondSelectionWordText />}
      spacing={theme.spaces[17]}
      flex={sectionStyle[1]}
    >
      <PrimaryButton title={ANALYTICS_BUTTON_TITLE} />
    </FirstSection>
    <SecondSection
      title={
        <TitleContainer
          title={HomeSecondSection.title}
          fontSize={theme.textSize.xl}
          width={theme.spaces[8]}
        />
      }
      text={
        <TextContainer
          text={HomeThirdSection.text}
          top={theme.spaces[6]}
          bottom={theme.spaces[6]}
          width={theme.spaces[9]}
          fontSize={theme.textSize.md}
        />
      }
      image={<Image context={SecondImageHomeSection} />}
    >
      <PrimaryButton title={NEW_SOLUTION_BUTTON_TITLE} />
    </SecondSection>
    <SectionThree
      title={
        <TitleContainer
          title={HomeThirdSection.title}
          width={theme.spaces[14]}
          fontSize={theme.textSize.xl}
          center
        />
      }
      text={
        <TextContainer
          text={HomeThirdSection.text}
          width={theme.spaces[9]}
          fontSize={theme.textSize.md}
        />
      }
    >
      <Image context={ClientsImageSection} />
    </SectionThree>
    <FourthSection
      sectionTitle={
        <TitleContainer title={HomeFourthSection.title} fontSize={theme.textSize.xl} />
      }
      sectionText={<TextContainer text={HomeFourthSection.text} top={theme.spaces[6]} />}
    />
  </MainContainer>
);

export default HomePageMain;
