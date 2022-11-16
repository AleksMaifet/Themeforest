import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import {
  ContainerWrapper,
  HomeSectionContainer,
  HomeSectionContainerContext,
  HomeSectionText,
  HomeSectionTitle,
} from './styles';
import { IHomeSectionOne } from './types';

const HomeSectionOne: React.FC<IHomeSectionOne> = ({
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
        <HomeSectionText>{text}</HomeSectionText>
        {children}
      </HomeSectionContainerContext>
    </ContainerWrapper>
  </HomeSectionContainer>
);

export default memo(HomeSectionOne);
