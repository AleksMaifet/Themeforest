import styled from 'styled-components';

import theme from '@/theme';

export const ImageContainer = styled.img<any>`
  position: absolute;
  top: 65%;
  left: 0;
  right: 0;
  background-image: url(${({ src }) => src});
  background-position: right bottom;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: ${theme.spaces[14]}%;
  margin: 0 auto;
`;
