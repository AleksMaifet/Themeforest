import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import SecondaryButton from '@/components/Buttons/SecondaryButton';
import Image from '@/components/Image';
import HomeSectionOne from '@/components/Main/Home/SectionOne';
import { PNG, ROUND_BUTTON_TITLE } from '@/constants';
import { HomeFirstSection } from '@/mocks';

import { MainContainer } from './styles';

const { text } = HomeFirstSection;
const { FirstImageHomeSection } = PNG;

const HomePageMain = (): ReturnComponentType => (
  <MainContainer>
    <HomeSectionOne text={text}>
      <SecondaryButton title={ROUND_BUTTON_TITLE} />
    </HomeSectionOne>
    <Image context={FirstImageHomeSection} />
  </MainContainer>
);

export default HomePageMain;
