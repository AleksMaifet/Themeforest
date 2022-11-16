import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { TitleWrapper } from './styles';
import { ITitleContainer } from './types';

const TitleContainer: React.FC<ITitleContainer> = ({
  title,
  fontSize,
  width,
}): ReturnComponentType => (
  <TitleWrapper width={width} fontSize={fontSize}>
    {title}
  </TitleWrapper>
);

export default memo(TitleContainer);
