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
  maxLines,
}): ReturnComponentType => (
  <TextWrapper
    width={width}
    top={top}
    bottom={bottom}
    fontSize={fontSize}
    maxLines={maxLines}
  >
    {text}
  </TextWrapper>
);

export default memo(TextContainer);
