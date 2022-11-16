import styled from 'styled-components';

import theme from '@/theme';

import { ITitleContainer } from './types';

export const TitleWrapper = styled.h1<Omit<ITitleContainer, 'title'>>`
  display: inline-block;
  width: ${({ width }) => width || theme.spaces[8]}%;
  font-size: ${({ fontSize }) => fontSize || theme.textSize.lg}rem;
`;
