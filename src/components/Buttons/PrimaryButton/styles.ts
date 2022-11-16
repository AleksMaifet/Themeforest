import styled from 'styled-components';

import theme from '@/theme';

import { PrimaryButtonWrapperType, StyleOptionsType } from './types';

export const ButtonWrapper = styled.button<PrimaryButtonWrapperType<StyleOptionsType>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${theme.spaces[13] * 2}px;
  padding: ${theme.spaces[2]}px 0;
  background-color: ${({ styleOptions }) =>
    styleOptions?.backGroundColor || theme.colors.Primary};
  font-family: ${theme.fontFamily[0]};
  border-radius: ${theme.spaces[1]}px;
  cursor: pointer;
  box-shadow: ${theme.boxShadows[0]};
  transition: ease 0.3s;

  span {
    font-size: ${theme.textSize.sm}rem;
    color: ${({ styleOptions }) => styleOptions?.color || theme.colors.Tertiary};
  }

  svg {
    margin-right: ${theme.spaces[2]}px;
    fill: ${({ styleOptions }) => styleOptions?.color || theme.colors.Tertiary};
  }

  &:hover {
    opacity: ${theme.opacity.opacity50};
  }

  &:disabled {
    background-color: ${theme.colors.Grey};
  }
`;
