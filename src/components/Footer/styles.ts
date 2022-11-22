import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills';

export const Container = styled.footer`
  ${handleContainerStyles(theme.spaces[0], theme.colors.Secondary)}
`;

export const ContainerWrapper = styled.div`
  ${theme.container};
  flex-direction: column;
`;

export const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${theme.spaces[14]}%;
  padding: ${theme.spaces[12]}px 0;
  border-bottom: 1px solid ${theme.colors.HelperBlue2};
`;

export const EmailTitleContainer = styled.div`
  width: ${theme.spaces[18] * 3}px;
`;

export const InformationalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${theme.spaces[14]}%;
  padding: ${theme.spaces[9]}px 0;
  border-bottom: 1px solid #607d94;
`;

export const SocialContainer = styled.div`
  width: ${theme.spaces[17] * 2}px;
`;

export const SocialIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${theme.spaces[14]}%;
`;

export const Line = styled.div`
  display: inline-flex;
`;

export const CopyRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${theme.spaces[14]}%;
  padding: ${theme.spaces[6]}px 0;
`;

export const CopyRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${theme.spaces[13] * 3}px;

  > p:nth-child(2) {
    text-align: end;
  }
`;
