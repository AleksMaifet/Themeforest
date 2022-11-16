import React from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { BenefitsWrapper } from './styles';
import { IBenefit } from './types';

const Benefit: React.FC<IBenefit> = ({ title, text, children }): ReturnComponentType => (
  <BenefitsWrapper>
    {children}
    {title}
    {text}
  </BenefitsWrapper>
);

export default Benefit;
