import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { ButtonWrapper } from './styles';
import { IPrimaryButton, StyleOptionsType } from './types';

const PrimaryButton: React.FC<IPrimaryButton<StyleOptionsType>> = ({
  title,
  icon,
  styleOptions,
}): ReturnComponentType => (
  <ButtonWrapper styleOptions={styleOptions}>
    {icon || null}
    <span>{title}</span>
  </ButtonWrapper>
);

export default memo(PrimaryButton);
