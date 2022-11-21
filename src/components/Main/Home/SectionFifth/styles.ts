import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills';

export const Container = styled.section`
  ${handleContainerStyles(theme.spaces[0])};
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  width: ${theme.spaces[14]}%;
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${theme.spaces[14]}%;
  margin-top: ${theme.spaces[9]}px;
`;
