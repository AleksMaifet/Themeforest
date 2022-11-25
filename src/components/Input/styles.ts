import styled from 'styled-components';

import theme from '@/theme';

import { PrimaryInputWrapperType, StyleOptionsInputType } from './types';

export const InputWrapper = styled.input<PrimaryInputWrapperType<StyleOptionsInputType>>`
  width: ${theme.spaces[14]}%;
  font-family: ${theme.fontFamily[1]};
  font-size: ${({ styleOptions }) => styleOptions?.fontSize || theme.textSize.sm}rem;
  background-color: ${({ styleOptions }) =>
    styleOptions?.backgroundColor || theme.colors.Tertiary};
  color: ${({ styleOptions }) => styleOptions?.color || theme.colors.Grey};
  box-shadow: ${({ boxShadow }) => (boxShadow ? theme.boxShadows[0] : 'none')};
  padding: ${({ styleOptions }) => styleOptions?.padding || theme.spaces[3]}px;
  margin-top: ${({ top }) => top || theme.spaces[0]}px;
  margin-bottom: ${({ bottom }) => bottom || theme.spaces[0]}px;
  border: 1px solid ${({ error }) => (error ? theme.colors.Error : 'transparent')};

  ::placeholder {
    color: ${({ styleOptions }) => styleOptions?.color || theme.colors.Grey};
  }
`;

export const TextAriaWrapper = styled.textarea<
  PrimaryInputWrapperType<StyleOptionsInputType>
>`
  width: ${theme.spaces[14]}%;
  font-family: ${theme.fontFamily[1]};
  font-size: ${({ styleOptions }) => styleOptions?.fontSize || theme.textSize.sm}rem;
  background-color: ${({ styleOptions }) =>
    styleOptions?.backgroundColor || theme.colors.Tertiary};
  color: ${({ styleOptions }) => styleOptions?.color || theme.colors.Grey};
  box-shadow: ${({ boxShadow }) => (boxShadow ? theme.boxShadows[0] : 'none')};
  padding: ${({ styleOptions }) => styleOptions?.padding || theme.spaces[3]}px;
  margin-top: ${({ top }) => top || theme.spaces[0]}px;
  margin-bottom: ${({ bottom }) => bottom || theme.spaces[0]}px;
  border: 1px solid ${({ error }) => (error ? theme.colors.Error : 'transparent')};

  ::placeholder {
    color: ${({ styleOptions }) => styleOptions?.color || theme.colors.Grey};
  }
`;
