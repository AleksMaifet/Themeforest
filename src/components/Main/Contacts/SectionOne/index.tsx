import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Form from '@/components/Forms/Form';
import { FORM_TITLE } from '@/constants';
import { ContactsSection } from '@/mocks';

import ListInfoContainer from './ListInfoContainer';
import {
  Container,
  ContainerInfo,
  ContainerTitle,
  ContainerWrapper,
  ContentContainer,
} from './styles';
import { IFirstSection } from './types';

const {
  ContactsFirstSection: { info },
} = ContactsSection;
const FirstSection: React.FC<IFirstSection> = ({ title }): ReturnComponentType => (
  <Container>
    <ContainerWrapper>
      <ContentContainer>
        <ContainerTitle>{title}</ContainerTitle>
        <Form value={FORM_TITLE} />
      </ContentContainer>
      <ContainerInfo>
        {info.map(list => (
          <ListInfoContainer key={list.id} value={list} />
        ))}
      </ContainerInfo>
    </ContainerWrapper>
  </Container>
);

export default memo(FirstSection);
