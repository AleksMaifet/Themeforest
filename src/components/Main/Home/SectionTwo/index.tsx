import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import {
  ContainerWrapper,
  HomeSectionContainer,
  HomeSectionContainerContext,
} from './styles';
import { ISecondSection } from './types';

const SecondSection: React.FC<ISecondSection> = ({
  title,
  text,
  image,
  children,
}): ReturnComponentType => (
  <HomeSectionContainer>
    {image}
    <ContainerWrapper>
      {title}
      <HomeSectionContainerContext>
        {text}
        {children}
      </HomeSectionContainerContext>
    </ContainerWrapper>
  </HomeSectionContainer>
);

export default memo(SecondSection);
