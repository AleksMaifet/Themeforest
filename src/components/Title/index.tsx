import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { TitleWrapper } from './styles';
import { ITitleContainer } from './types';

const TitleContainer: React.FC<ITitleContainer> = ({
  title,
  fontSize,
  width,
  top,
  bottom,
  center,
}): ReturnComponentType => (
  <TitleWrapper
    top={top}
    bottom={bottom}
    center={center}
    width={width}
    fontSize={fontSize}
  >
    {title}
  </TitleWrapper>
);

export default memo(TitleContainer);
