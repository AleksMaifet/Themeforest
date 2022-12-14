import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

export const Container = styled.section`
  ${handleContainerStyles(theme.spaces[0], theme.colors.Background)}
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
