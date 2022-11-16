import React, { memo, useRef } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Image from '@/components/Image';
import CountUpContainer from '@/components/Main/Home/SectionThree/CountUp';
import { DURATION_VALUE_COUNT, PNG } from '@/constants';
import { useIsInViewport } from '@/hooks';
import { HomePageSection } from '@/mocks';

import {
  ContainerWrapper,
  HomeSectionContainer,
  HomeSectionContainerContext,
  HomeSectionText,
  HomeSectionTitle,
} from './styles';
import { ISectionThree } from './types';

const { ClientsImageSection } = PNG;

const {
  HomeFourthSection: { resultProvideServices },
} = HomePageSection;

const SectionThree: React.FC<ISectionThree> = ({ title, text }): ReturnComponentType => {
  const ref = useRef<HTMLDivElement>(null);

  const isView = useIsInViewport(ref);

  return (
    <HomeSectionContainer>
      <ContainerWrapper>
        <HomeSectionTitle>{title}</HomeSectionTitle>
        <HomeSectionContainerContext ref={ref}>
          {resultProvideServices.map(({ id, titleProvide, amount, suffix }) => (
            <CountUpContainer
              key={id}
              isView={isView}
              title={titleProvide}
              duration={DURATION_VALUE_COUNT}
              end={amount}
              suffix={suffix}
            />
          ))}
          <HomeSectionText>{text}</HomeSectionText>
        </HomeSectionContainerContext>
        <Image context={ClientsImageSection} />
      </ContainerWrapper>
    </HomeSectionContainer>
  );
};

export default memo(SectionThree);
