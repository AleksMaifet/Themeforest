import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { ButtonWrapper } from './styles';
import { ISecondaryButton, StyleOptionsType } from './types';

const SecondaryButton: React.FC<ISecondaryButton<StyleOptionsType>> = ({
  title,
  styleOptions,
  callback,
  size,
  fontSize,
}): ReturnComponentType => (
  <ButtonWrapper
    styleOptions={styleOptions}
    onClick={callback}
    size={size}
    fontSize={fontSize}
  >
    <span>{title}</span>
  </ButtonWrapper>
);

export default memo(SecondaryButton);
