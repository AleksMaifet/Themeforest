import styled from 'styled-components';

import theme from '@/theme';

export const Container = styled.li``;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: ${theme.spaces[3]}px;
  }
`;
