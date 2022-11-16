import styled from 'styled-components';

import theme from '@/theme';

export const BenefitsWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: ${theme.spaces[17] * 2}px;
  background-color: ${theme.colors.Tertiary};
  padding: ${theme.spaces[5]}px;
  box-shadow: ${theme.boxShadows[2]};
  border-radius: ${theme.spaces[1]}px;
`;
