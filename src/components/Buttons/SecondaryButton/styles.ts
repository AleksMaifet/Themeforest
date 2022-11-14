import styled from 'styled-components';

import theme from '@/theme';

import { SecondaryButtonWrapperType, StyleOptionsType } from './types';

export const ButtonWrapper = styled.button<SecondaryButtonWrapperType<StyleOptionsType>>`
  position: relative;
  z-index: 1;
  width: ${theme.spaces[14] + 20}px;
  height: ${theme.spaces[14] + 20}px;
  box-shadow: 0 0 0 ${theme.spaces[2]}px ${theme.colors.White};
  border-radius: 50%;
  background-color: ${({ styleOptions }) =>
    styleOptions?.backGroundColor || theme.colors.Primary};
  cursor: pointer;
  overflow: hidden;
  transition: ease 0.3s;

  :after {
    content: '';
    position: absolute;
    width: 85%;
    height: 85%;
    top: 7%;
    left: 7.5%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }

  span {
    font-size: ${theme.textSize.sm}rem;
    font-family: ${theme.fontFamily[0]};
    color: ${({ styleOptions }) => styleOptions?.color || theme.colors.Tertiary};
  }

  &:hover {
    opacity: ${theme.opacity.opacity50};
  }

  &:disabled {
    background-color: ${theme.colors.Grey};
  }
`;
