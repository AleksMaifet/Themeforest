import styled from 'styled-components';

import theme from '@/theme';

import { ITextContainer } from './types';

export const TextWrapper = styled.p<Omit<ITextContainer, 'text'>>`
  display: -webkit-box;
  --max-lines: ${({ maxLines }) => maxLines};
  -webkit-line-clamp: var(--max-lines);
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${({ width }) => width || theme.spaces[14]}%;
  font-family: ${theme.fontFamily[1]};
  font-size: ${({ fontSize }) => fontSize || theme.textSize.sm}rem;
  color: ${({ color }) => color || theme.colors.Grey};
  line-height: ${theme.spaces[6]}px;
  margin-top: ${({ top }) => top || 0}px;
  margin-bottom: ${({ bottom }) => bottom || 0}px;
`;
