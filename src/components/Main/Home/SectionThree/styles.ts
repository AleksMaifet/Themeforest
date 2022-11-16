import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

export const HomeSectionContainer = styled.section`
  ${handleContainerStyles(theme.spaces[0])};
  padding: ${theme.spaces[16]}px 0 ${theme.spaces[12]}px 0;
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  flex-direction: column;
`;

export const HomeSectionContainerContext = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spaces[9]}px 0;
`;
