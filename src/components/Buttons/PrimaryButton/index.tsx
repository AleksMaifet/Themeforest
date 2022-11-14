import React, { memo } from 'react';

import { ButtonWrapper } from 'src/components/Buttons/PrimaryButton/styles';
import {
  IPrimaryButton,
  StyleOptionsType,
} from 'src/components/Buttons/PrimaryButton/types';

import { ReturnComponentType } from '@/commonTypes';

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
