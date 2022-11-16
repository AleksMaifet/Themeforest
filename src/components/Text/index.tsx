import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { TextWrapper } from './styles';
import { ITextContainer } from './types';

const TextContainer: React.FC<ITextContainer> = ({
  text,
  fontSize,
  top,
  bottom,
  width,
}): ReturnComponentType => (
  <TextWrapper width={width} top={top} bottom={bottom} fontSize={fontSize}>
    {text}
  </TextWrapper>
);

export default memo(TextContainer);
