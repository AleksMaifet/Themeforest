import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { Container, ContainerTitle, ContainerWrapper } from './styles';
import { IFirstSection } from './types';

const FirstSection: React.FC<IFirstSection> = ({ title }): ReturnComponentType => (
  <Container>
    <ContainerWrapper>
      <ContainerTitle>{title}</ContainerTitle>
    </ContainerWrapper>
  </Container>
);

export default memo(FirstSection);
