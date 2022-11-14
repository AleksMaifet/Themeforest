import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { ButtonWrapper } from './styles';
import { ISecondaryButton, StyleOptionsType } from './types';

const SecondaryButton: React.FC<ISecondaryButton<StyleOptionsType>> = ({
  title,
  styleOptions,
}): ReturnComponentType => (
  <ButtonWrapper styleOptions={styleOptions}>
    <span>{title}</span>
  </ButtonWrapper>
);

export default memo(SecondaryButton);
