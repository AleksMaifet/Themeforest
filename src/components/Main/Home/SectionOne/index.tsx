import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import {
  ContainerWrapper,
  HomeSectionContainer,
  HomeSectionContainerContext,
  HomeSectionTitle,
} from './styles';
import { IFirstSection } from './types';

const FirstSection: React.FC<IFirstSection> = ({
  title,
  text,
  spacing,
  flex,
  children,
}): ReturnComponentType => (
  <HomeSectionContainer spacing={spacing}>
    <ContainerWrapper flex={flex}>
      <HomeSectionTitle>{title}</HomeSectionTitle>
      <HomeSectionContainerContext>
        {text}
        {children}
      </HomeSectionContainerContext>
    </ContainerWrapper>
  </HomeSectionContainer>
);

export default memo(FirstSection);
