import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { ButtonWrapper } from './styles';
import { IPrimaryButton, StyleOptionsType } from './types';

const PrimaryButton: React.FC<IPrimaryButton<Partial<StyleOptionsType>>> = ({
  title,
  icon,
  styleOptions,
  isDisabled,
  callback,
  reverse,
  boxShadow,
}): ReturnComponentType => (
  <ButtonWrapper
    onClick={callback}
    styleOptions={styleOptions}
    flex={title}
    disabled={isDisabled}
    reverse={reverse}
    boxShadow={boxShadow}
  >
    {icon || null}
    {title ? <span>{title}</span> : null}
  </ButtonWrapper>
);
export default memo(PrimaryButton);
