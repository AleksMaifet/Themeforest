import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills';

export const Container = styled.section`
  ${handleContainerStyles(theme.spaces[16])};
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  align-items: flex-start;
`;

export const ContainerTitle = styled.h1`
  display: inline-block;
  width: ${theme.spaces[8]}%;
  font-size: ${theme.textSize.xlll}rem;
  font-weight: bold;
`;
