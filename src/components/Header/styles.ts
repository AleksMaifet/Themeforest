import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills/handleContainerStyles';

export const HeaderContainer = styled.header`
  ${handleContainerStyles(theme.spaces[8], theme.colors.Background)}
`;

export const ContainerWrapper = styled.div`
  ${theme.container}
`;

export const NavLine = styled.nav``;

export const NavLinkWrapper = styled(NavLink)`
  color: ${theme.colors.Grey};
  font-size: ${theme.textSize.sm}rem;

  :nth-child(n + 2) {
    margin-left: ${theme.spaces[5]}px;
  }

  &:hover {
    color: ${theme.colors.Primary};
  }

  &.active {
    color: ${theme.colors.Primary};
    text-decoration: underline;
  }
`;
