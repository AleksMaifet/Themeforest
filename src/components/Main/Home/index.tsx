import React from 'react';

import { SwiperSlide } from 'swiper/react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from '@/components/Image';
import FifthSection from '@/components/Main/Home/SectionFifth';
import FourthSection from '@/components/Main/Home/SectionFour';
import FirstSection from '@/components/Main/Home/SectionOne';
import SectionThree from '@/components/Main/Home/SectionThree';
import SecondSection from '@/components/Main/Home/SectionTwo';
import SwiperSection from '@/components/Main/Home/SwiperSection';
import Blog from '@/components/Main/Home/SwiperSection/Blog';
import Testimonial from '@/components/Main/Home/SwiperSection/Testimonial';
import VideoSection from '@/components/Main/Home/VideoSection';
import TextContainer from '@/components/Text';
import TitleContainer from '@/components/Title';
import { ANALYTICS_BUTTON_TITLE, NEW_SOLUTION_BUTTON_TITLE, PNG, SVG } from '@/constants';
import { HomePageSection } from '@/mocks';
import theme from '@/theme';

import FirstButtonSection from './SectionOne/FirstButtonSection';
import FirstSelectionWordText from './SectionOne/FirstSelectionWordText';
import SecondSelectionWordText from './SectionOne/SecondSelectionWordText';
import { MainContainer } from './styles';

const {
  HomeFirstSection,
  HomeSecondSection,
  HomeThirdSection,
  HomeFourthSection,
  HomeFifthSection,
  HomeSixthSection,
  HomeSeventhSection,
} = HomePageSection;
const { SecondImageHomeSection, ClientsImageSection } = PNG;

const { ArrowLeft, ArrowRight } = SVG;

const sectionStyle = [
  { alignItems: 'flex-start' },
  { justifyContent: 'center', alignItems: 'flex-start' },
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
    <VideoSection />
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
        <TitleContainer title={HomeSecondSection.title} fontSize={theme.textSize.xl} />
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
    <SwiperSection
      autoPlay
      spaceBetween={100}
      title={
        <TitleContainer title={HomeFifthSection.title} fontSize={theme.textSize.xl} />
      }
      prevController={<ArrowLeft />}
      nextController={<ArrowRight />}
    >
      {HomeFifthSection.clients.map(el => (
        <SwiperSlide key={el.id}>
          <Testimonial value={el} />
        </SwiperSlide>
      ))}
    </SwiperSection>
    <FifthSection value={HomeSixthSection} />
    <SwiperSection
      spaceBetween={10}
      title={
        <TitleContainer title={HomeSeventhSection.title} fontSize={theme.textSize.xl} />
      }
      prevController={<ArrowLeft />}
      nextController={<ArrowRight />}
    >
      {HomeSeventhSection.blogs.map(el => (
        <SwiperSlide key={el.id}>
          <Blog value={el} />
        </SwiperSlide>
      ))}
    </SwiperSection>
  </MainContainer>
);

export default HomePageMain;
