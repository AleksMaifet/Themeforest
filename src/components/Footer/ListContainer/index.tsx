import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import TitleContainer from '@/components/Title';
import theme from '@/theme';

import { Container, ItemLine, ItemList } from './styles';
import { IListContainer } from './types';

const ListContainer: React.FC<IListContainer> = ({
  value: { title, items },
}): ReturnComponentType => (
  <Container>
    <TitleContainer
      title={title}
      color={theme.colors.White}
      fontSize={theme.textSize.sm}
      bottom={theme.spaces[6]}
    />
    <ItemLine>
      {items.map((el, index) => (
        <ItemList key={`${el + index}`}>{el}</ItemList>
      ))}
    </ItemLine>
  </Container>
);

export default memo(ListContainer);
