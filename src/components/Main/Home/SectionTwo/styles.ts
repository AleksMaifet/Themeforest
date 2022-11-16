import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

export const HomeSectionContainer = styled.section`
  ${handleContainerStyles(theme.spaces[0], theme.colors.Background)}
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  flex-direction: column;
  align-items: flex-start;
`;

export const HomeSectionContainerContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${theme.spaces[8]}%;
`;
