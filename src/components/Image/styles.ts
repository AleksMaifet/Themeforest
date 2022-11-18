import styled from 'styled-components';

import theme from '@/theme';

export const ImageContainer = styled.img<any>`
  background-image: url(${({ src }) => src});
  background-position: right bottom;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: ${theme.spaces[14]}%;
`;
