import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

export const Container = styled.section`
  ${handleContainerStyles(theme.spaces[0])};
  padding: ${theme.spaces[16]}px 0 ${theme.spaces[16]}px 0;
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${theme.spaces[14]}%;
`;

export const ContainerContext = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${theme.spaces[14]}%;
  margin-top: ${theme.spaces[9]}px;
`;
