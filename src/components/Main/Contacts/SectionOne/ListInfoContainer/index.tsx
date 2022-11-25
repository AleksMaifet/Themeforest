import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import TextComponent from '@/components/Text';
import TitleComponent from '@/components/Title';
import theme from '@/theme';

import { Container, TitleContainer } from './styles';
import { IListInfoContainer } from './types';

const ListInfoContainer: React.FC<IListInfoContainer> = ({
  value: { title, text, Image },
}): ReturnComponentType => (
  <Container>
    <TitleContainer>
      <Image />
      <TitleComponent title={title} fontSize={theme.textSize.sm} />
    </TitleContainer>
    <TextComponent text={text} top={theme.spaces[1]} />
  </Container>
);

export default ListInfoContainer;
