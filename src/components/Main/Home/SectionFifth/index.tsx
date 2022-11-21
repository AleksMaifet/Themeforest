import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import TitleContainer from '@/components/Title';
import theme from '@/theme';

import Rate from './Rate';
import { Container, ContainerContent, ContainerWrapper, TitleWrapper } from './styles';
import { IFifthSection } from './types';

const FifthSection: React.FC<IFifthSection> = ({
  value: { title, tariffs },
}): ReturnComponentType => (
  <Container>
    <ContainerWrapper>
      <TitleWrapper>
        <TitleContainer title={title} fontSize={theme.textSize.xl} />
      </TitleWrapper>
      <ContainerContent>
        {tariffs.map(el => (
          <Rate key={el.id} value={el} />
        ))}
      </ContainerContent>
    </ContainerWrapper>
  </Container>
);

export default memo(FifthSection);
