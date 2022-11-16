import styled from 'styled-components';

import { DEFAULT_VALUE_STYLE } from '@/constants';
import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

import { IFirstSection } from './types';

export const HomeSectionContainer = styled.section<Pick<IFirstSection, 'spacing'>>`
  position: relative;
  ${({ spacing = theme.spaces[0] }) => handleContainerStyles(spacing)};
`;

export const ContainerWrapper = styled.div<Pick<IFirstSection, 'flex'>>`
  ${theme.container};
  justify-content: ${({ flex }) => (flex ? flex.justifyContent : DEFAULT_VALUE_STYLE)};
  align-items: ${({ flex }) => (flex ? flex.alignItems : DEFAULT_VALUE_STYLE)};
`;

export const HomeSectionTitle = styled.h1`
  display: inline-block;
  position: relative;
  width: ${theme.spaces[9]}%;
  font-size: ${theme.textSize.xl + 0.5}rem;
`;

export const HomeSectionContainerContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${theme.spaces[9]}%;
`;
