import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

export const HomeSectionContainer = styled.section`
  ${handleContainerStyles(theme.spaces[16], theme.colors.Background)};
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  flex-direction: column;
`;

export const HomeSectionTitle = styled.h1`
  display: inline-block;
  position: relative;
  font-size: ${theme.textSize.lg}rem;
`;

export const HomeSectionContainerContext = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const HomeSectionText = styled.p`
  font-family: ${theme.fontFamily[1]};
  font-size: ${theme.textSize.sm}rem;
  color: ${theme.colors.Grey};
  width: ${theme.spaces[8]}%;
`;
