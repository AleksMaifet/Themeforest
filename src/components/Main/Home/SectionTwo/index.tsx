import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { Container, ContainerContext, ContainerWrapper } from './styles';
import { ISecondSection } from './types';

const SecondSection: React.FC<ISecondSection> = ({
  title,
  text,
  image,
  children,
}): ReturnComponentType => (
  <Container>
    {image}
    <ContainerWrapper>
      {title}
      <ContainerContext>
        {text}
        {children}
      </ContainerContext>
    </ContainerWrapper>
  </Container>
);

export default memo(SecondSection);
