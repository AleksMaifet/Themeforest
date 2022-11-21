import styled from 'styled-components';

import theme from '@/theme';

export const Container = styled.div`
  width: ${theme.spaces[15] * 2}px;
`;

export const ItemLine = styled.ul`
  li:not(:last-child) {
    margin-bottom: ${theme.spaces[3]}px;
  }
`;

export const ItemList = styled.li`
  font-size: ${theme.textSize.sm}rem;
  font-family: ${theme.fontFamily[1]};
  color: ${theme.colors.Grey};
  line-height: ${theme.spaces[5]}px;
`;
