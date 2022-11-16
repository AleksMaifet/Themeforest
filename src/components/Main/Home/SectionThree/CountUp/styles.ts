import styled from 'styled-components';

import theme from '@/theme';

export const CountContainerWrapper = styled.div`
  width: ${theme.spaces[3]}%;
  text-align: center;
  overflow: hidden;
`;

export const CountWrapper = styled.div`
  font-family: ${theme.fontFamily[1]};
  color: ${theme.colors.Primary};
  font-size: ${theme.spaces[1]}rem;
  font-weight: bold;
`;

export const HomeSectionText = styled.p`
  font-family: ${theme.fontFamily[1]};
  font-size: ${theme.textSize.sm}rem;
  color: ${theme.colors.Grey};
`;
