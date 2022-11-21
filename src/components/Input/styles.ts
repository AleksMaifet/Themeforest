import styled from 'styled-components';

import { PrimaryInputWrapperType, styleOptionsInputType } from '@/components/Input/types';
import theme from '@/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputWrapper = styled.input<PrimaryInputWrapperType<styleOptionsInputType>>`
  width: ${({ styleOptions }) => styleOptions?.width || theme.spaces[14] * 3}px;
  font-family: ${theme.fontFamily[1]};
  font-size: ${({ styleOptions }) => styleOptions?.fontSize || theme.textSize.sm}rem;
  background-color: ${({ styleOptions }) =>
    styleOptions?.backgroundColor || theme.colors.HelperBlue3};
  padding: ${({ styleOptions }) => styleOptions?.padding || theme.spaces[3]}px;
`;
