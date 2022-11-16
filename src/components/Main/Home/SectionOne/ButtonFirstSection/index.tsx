import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import SecondaryButton from '@/components/Buttons/SecondaryButton';
import { ROUND_BUTTON_TITLE } from '@/constants';

import { ButtonWrapper } from './styles';

const ButtonFirstSection = (): ReturnComponentType => (
  <ButtonWrapper>
    <SecondaryButton title={ROUND_BUTTON_TITLE} />
  </ButtonWrapper>
);

export default ButtonFirstSection;
