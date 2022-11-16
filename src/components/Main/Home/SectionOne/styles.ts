import styled from 'styled-components';

import { DEFAULT_VALUE_STYLE } from '@/constants';
import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

import { IHomeSectionOne } from './types';

export const HomeSectionContainer = styled.section<Pick<IHomeSectionOne, 'spacing'>>`
  position: relative;
  ${({ spacing = theme.spaces[0] }) => handleContainerStyles(spacing)};
`;

export const ContainerWrapper = styled.div<Pick<IHomeSectionOne, 'flex'>>`
  ${theme.container};
  justify-content: ${({ flex }) => (flex ? flex.justifyContent : DEFAULT_VALUE_STYLE)};
  align-items: ${({ flex }) => (flex ? flex.alignItems : DEFAULT_VALUE_STYLE)};
`;

export const HomeSectionTitle = styled.h1`
  display: inline-block;
  position: relative;
  width: ${theme.spaces[6] + 1}%;
  font-size: ${theme.textSize.lg}rem;
`;

export const HomeSectionContainerContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${theme.spaces[8]}%;
`;

export const HomeSectionText = styled.p`
  font-family: ${theme.fontFamily[1]};
  font-size: ${theme.textSize.sm}rem;
  color: ${theme.colors.Grey};
  margin-bottom: ${theme.spaces[6]}px;
`;
