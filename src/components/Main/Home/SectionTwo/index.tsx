import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import {
  ContainerWrapper,
  HomeSectionContainer,
  HomeSectionContainerContext,
} from './styles';
import { IHomeSectionTwo } from './types';

const HomeSectionTwo: React.FC<IHomeSectionTwo> = ({
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

export default memo(HomeSectionTwo);
