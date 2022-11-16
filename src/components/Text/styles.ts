import styled from 'styled-components';

import theme from '@/theme';

import { ITextContainer } from './types';

export const TextWrapper = styled.p<Omit<ITextContainer, 'text'>>`
  width: ${({ width }) => width || theme.spaces[14]}%;
  font-family: ${theme.fontFamily[1]};
  font-size: ${({ fontSize }) => fontSize || theme.textSize.sm}rem;
  color: ${theme.colors.Grey};
  margin-top: ${({ top }) => top || 0}px;
  margin-bottom: ${({ bottom }) => bottom || 0}px;
`;
