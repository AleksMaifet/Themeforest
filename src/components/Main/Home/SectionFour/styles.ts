import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

export const Container = styled.section`
  ${handleContainerStyles(theme.spaces[16], theme.colors.Background)};
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  flex-direction: column;
`;

export const Line = styled.div``;

export const ContainerContext = styled.div`
  display: flex;
  align-items: center;
`;

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${theme.spaces[6]}px;

  > :nth-child(2n + 1) {
    position: relative;
    top: -${theme.spaces[3]}%;
  }
`;
