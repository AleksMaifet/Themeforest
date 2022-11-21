import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TextContainer from '@/components/Text';
import TitleContainer from '@/components/Title';
import { CONTACT_BUTTON_TITLE } from '@/constants';
import { HomePageSection } from '@/mocks';
import theme from '@/theme';

import { Container, ContainerWrapper } from './styles';

const {
  HomeEighthSection: { title, text },
} = HomePageSection;

const SixthSection = (): ReturnComponentType => (
  <Container>
    <ContainerWrapper>
      <TitleContainer title={title} />
      <TextContainer
        text={text}
        top={theme.spaces[6]}
        bottom={theme.spaces[6]}
        width={theme.spaces[9]}
      />
      <PrimaryButton title={CONTACT_BUTTON_TITLE} boxShadow borderRadius />
    </ContainerWrapper>
  </Container>
);

export default SixthSection;
