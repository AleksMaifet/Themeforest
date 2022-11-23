import styled from 'styled-components';

import theme from '@/theme';
import { handleContainerStyles } from '@/utills';

export const Container = styled.section`
  ${handleContainerStyles(theme.spaces[0])};
`;

export const VideoContainer = styled.div`
  width: ${theme.spaces[14]}%;
  height: ${theme.spaces[14]}%;
  animation: ${theme.animation.spawnAnimation} ease 0.3s;
`;

export const VideoWrapper = styled.video`
  opacity: ${theme.opacity.opacity50};
  object-fit: cover;
  height: ${theme.spaces[19] * 4}px;
  width: ${theme.spaces[14]}%;
`;

export const ImageContainer = styled.div`
  animation: ${theme.animation.spawnAnimation} ease 0.3s;
`;
