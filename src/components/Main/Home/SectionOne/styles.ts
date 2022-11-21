import styled from 'styled-components';

import { DEFAULT_VALUE_STYLE } from '@/constants';
import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

import { IFirstSection } from './types';

export const Container = styled.section<Pick<IFirstSection, 'spacing'>>`
  ${({ spacing = theme.spaces[0] }) => handleContainerStyles(spacing)};
`;

export const ContainerWrapper = styled.div<Pick<IFirstSection, 'flex'>>`
  ${theme.container};
  justify-content: ${({ flex }) => (flex ? flex.justifyContent : DEFAULT_VALUE_STYLE)};
  align-items: ${({ flex }) => (flex ? flex.alignItems : DEFAULT_VALUE_STYLE)};
`;

export const ContainerTitle = styled.h1`
  display: inline-block;
  width: ${theme.spaces[8]}%;
  font-size: ${theme.textSize.xl + 0.5}rem;
  font-weight: bold;
`;

export const ContainerContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: ${theme.spaces[7]}%;
`;
