import styled from 'styled-components';

import theme from '@/theme';

import { ITitleContainer } from './types';

export const TitleWrapper = styled.h1<Omit<ITitleContainer, 'title'>>`
  display: flex;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  align-items: center;
  width: ${({ width }) => width || theme.spaces[14]}%;
  font-size: ${({ fontSize }) => fontSize || theme.textSize.lg}rem;
  margin-top: ${({ top }) => top || 0}px;
  margin-bottom: ${({ bottom }) => bottom || 0}px;
`;
