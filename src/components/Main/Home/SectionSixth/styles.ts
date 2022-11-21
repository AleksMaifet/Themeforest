import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills';

export const Container = styled.section`
  ${handleContainerStyles(theme.spaces[0], theme.colors.Background)};
  padding: ${theme.spaces[14]}px 0;
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  flex-direction: column;
  text-align: center;
`;
