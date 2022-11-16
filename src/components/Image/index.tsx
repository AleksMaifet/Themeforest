import React from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { ImageContainer } from './styles';
import { IImage } from './types';

const Image: React.FC<IImage> = ({ context }): ReturnComponentType => {
  if (typeof context === 'string') {
    return <ImageContainer src={context} />;
  }

  return context;
};

export default Image;
