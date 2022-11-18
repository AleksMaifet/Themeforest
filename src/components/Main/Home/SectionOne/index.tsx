import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { Container, ContainerContext, ContainerTitle, ContainerWrapper } from './styles';
import { IFirstSection } from './types';

const FirstSection: React.FC<IFirstSection> = ({
  title,
  text,
  spacing,
  flex,
  children,
}): ReturnComponentType => (
  <Container spacing={spacing}>
    <ContainerWrapper flex={flex}>
      <ContainerTitle>{title}</ContainerTitle>
      <ContainerContext>
        {text}
        {children}
      </ContainerContext>
    </ContainerWrapper>
  </Container>
);

export default memo(FirstSection);
