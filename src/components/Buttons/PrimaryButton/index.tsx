import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { ButtonWrapper } from './styles';
import { IPrimaryButton, StyleOptionsButtonType } from './types';

const PrimaryButton: React.FC<IPrimaryButton<Partial<StyleOptionsButtonType>>> = ({
  title,
  icon,
  styleOptions,
  isDisabled,
  callback,
  reverse,
  boxShadow,
  borderRadius,
}): ReturnComponentType => (
  <ButtonWrapper
    onClick={callback}
    styleOptions={styleOptions}
    flex={title}
    disabled={isDisabled}
    reverse={reverse}
    boxShadow={boxShadow}
    borderRadius={borderRadius}
  >
    {icon || null}
    {title ? <span>{title}</span> : null}
  </ButtonWrapper>
);
export default memo(PrimaryButton);
