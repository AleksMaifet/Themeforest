import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

export const Container = styled.section`
  ${handleContainerStyles(theme.spaces[0])};
  padding: ${theme.spaces[16]}px 0 ${theme.spaces[12]}px 0;
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  flex-direction: column;
`;

export const ContainerContext = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spaces[9]}px 0;
`;

export const Line = styled.div`
  animation: 3s linear 1s infinite alternate slidein;
`;
