import React from 'react';

import { ReturnComponentType } from '@/commonTypes';

import {
  ContainerWrapper,
  HomeSectionContainer,
  HomeSectionContainerContext,
  HomeSectionText,
  HomeSectionTitle,
} from './styles';

const SectionFifth = (): ReturnComponentType => (
  <HomeSectionContainer>
    <ContainerWrapper>
      <HomeSectionContainerContext>
        <HomeSectionTitle>The benefits of Ensome</HomeSectionTitle>
        <HomeSectionText>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </HomeSectionText>
      </HomeSectionContainerContext>
    </ContainerWrapper>
  </HomeSectionContainer>
);

export default SectionFifth;
