import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { ButtonWrapper } from './styles';
import { IButton, StyleOptionsType } from './types';

const Button: React.FC<IButton<StyleOptionsType>> = ({
  title,
  icon,
  styleOptions,
}): ReturnComponentType => (
  <ButtonWrapper styleOptions={styleOptions}>
    {icon || null}
    <span>{title}</span>
  </ButtonWrapper>
);

export default memo(Button);
