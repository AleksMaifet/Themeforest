import React from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { ImageContainer } from './styles';
import { IImage } from './types';

const Image: React.FC<IImage> = ({ context }): ReturnComponentType => (
  <ImageContainer src={context} />
);

export default Image;
