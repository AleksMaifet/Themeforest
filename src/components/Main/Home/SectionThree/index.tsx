import React, { memo, useRef } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import CountUpContainer from '@/components/Main/Home/SectionThree/CountUp';
import { DURATION_VALUE_COUNT } from '@/constants';
import { useIsInViewport } from '@/hooks';
import { HomePageSection } from '@/mocks';

import { Container, ContainerContext, ContainerWrapper } from './styles';
import { IThirdSection } from './types';

const {
  HomeThirdSection: { resultProvideServices },
} = HomePageSection;

const ThirdSection: React.FC<IThirdSection> = ({
  title,
  text,
  children,
}): ReturnComponentType => {
  const ref = useRef<HTMLDivElement>(null);

  const isView = useIsInViewport(ref);

  return (
    <Container>
      <ContainerWrapper>
        {title}
        <ContainerContext ref={ref}>
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
          {text}
        </ContainerContext>
        {children}
      </ContainerWrapper>
    </Container>
  );
};

export default memo(ThirdSection);
