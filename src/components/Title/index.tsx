import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { TitleWrapper } from './styles';
import { ITitleContainer } from './types';

const TitleComponent: React.FC<ITitleContainer> = ({
  title,
  fontSize,
  top,
  bottom,
  center,
  color,
}): ReturnComponentType => (
  <TitleWrapper
    top={top}
    bottom={bottom}
    center={center}
    fontSize={fontSize}
    color={color}
  >
    {title}
  </TitleWrapper>
);

export default memo(TitleComponent);
