import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

import { Container, InputWrapper } from './styles';
import { IPrimaryInput, styleOptionsInputType } from './types';

const PrimaryInput: React.FC<IPrimaryInput<Partial<styleOptionsInputType>>> = ({
  placeholderTitle,
  buttonTitle,
  styleOptionsInput,
  styleOptionsButton,
}): ReturnComponentType => (
  <Container>
    <InputWrapper placeholder={placeholderTitle} styleOptions={styleOptionsInput} />
    <PrimaryButton title={buttonTitle} styleOptions={styleOptionsButton} />
  </Container>
);

export default memo(PrimaryInput);
