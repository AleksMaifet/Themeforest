import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { TextWrapper } from './styles';
import { ITextContainer } from './types';

const TextComponent: React.FC<ITextContainer> = ({
  text,
  fontSize,
  top,
  bottom,
  width,
  maxLines,
  color,
}): ReturnComponentType => (
  <TextWrapper
    width={width}
    top={top}
    bottom={bottom}
    fontSize={fontSize}
    maxLines={maxLines}
    color={color}
  >
    {text}
  </TextWrapper>
);

export default memo(TextComponent);
