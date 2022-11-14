import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

export const HomeSectionOneContainer = styled.section`
  ${handleContainerStyles(theme.colors.Tertiary, theme.spaces[11])}
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  align-items: flex-start;
`;

export const HomeSectionOneTitle = styled.h1`
  display: inline-block;
  position: relative;
  width: ${theme.spaces[6] + 1}%;
  font-size: ${theme.textSize.lg}rem;
`;

export const SelectionWord = styled.span`
  color: ${theme.colors.Primary};
`;

export const HomeSectionOneContainerContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${theme.spaces[6] + 1}%;
`;

export const HomeSectionOneText = styled.p`
  font-family: ${theme.fontFamily[1]};
  font-size: ${theme.textSize.sm}rem;
  margin-bottom: ${theme.spaces[6]}px;
`;
