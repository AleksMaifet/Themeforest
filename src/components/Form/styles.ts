import { FieldError } from 'react-hook-form';
import styled from 'styled-components';

import theme from '@/theme';

export const FormWrapper = styled.form`
  display: inline-flex;
  flex-direction: column;
  width: ${theme.spaces[15] * 4}px;
`;

export const FormInformLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${theme.spaces[14]}%;
`;

export const FormButtonWrapper = styled.div`
  width: ${theme.spaces[14]}%;
  text-align: end;
  margin-top: ${theme.spaces[2]}px;
`;

export const Line = styled.div``;

export const ErrorMessage = styled.p<{ error?: FieldError }>`
  height: ${theme.spaces[4] + 1}px;
  text-align: center;
  font-size: ${theme.textSize.sm}rem;
  color: ${theme.colors.Error};
  margin: ${theme.spaces[2]}px 0;

  :before {
    content: ${({ error }) => (error ? '⚠ ' : '')};
    display: inline;
`;
