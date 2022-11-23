import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import PrimaryInput from '@/components/Input';

import { Container } from './styles';
import { IPrimaryInput } from './types';

const InputContainer: React.FC<IPrimaryInput> = ({
  placeholderTitle,
  buttonTitle,
  styleOptionsInput,
  styleOptionsButton,
}): ReturnComponentType => (
  <Container>
    <PrimaryInput placeholder={placeholderTitle} styleOptions={styleOptionsInput} />
    <PrimaryButton title={buttonTitle} styleOptions={styleOptionsButton} />
  </Container>
);

export default memo(InputContainer);
