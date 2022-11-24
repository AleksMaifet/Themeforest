import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Form from '@/components/Forms/Form';

import { Container, ContainerTitle, ContainerWrapper } from './styles';
import { IFirstSection } from './types';

const FirstSection: React.FC<IFirstSection> = ({ title }): ReturnComponentType => (
  <Container>
    <ContainerWrapper>
      <ContainerTitle>{title}</ContainerTitle>
      <Form />
    </ContainerWrapper>
  </Container>
);

export default memo(FirstSection);
