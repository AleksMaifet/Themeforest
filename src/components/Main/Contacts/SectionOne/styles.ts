import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills';

export const Container = styled.section`
  ${handleContainerStyles(theme.spaces[16])};
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  align-items: flex-start;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${theme.spaces[10]}%;
`;

export const ContainerTitle = styled.h1`
  display: inline-block;
  width: ${theme.spaces[8]}%;
  font-size: ${theme.textSize.xlll}rem;
  font-weight: bold;
`;
