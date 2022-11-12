import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import { ContainerWrapper } from '@/constants/styles';

import {
  HomeSectionOneContainer,
  HomeSectionOneText,
  HomeSectionOneTitle,
  SelectionWord,
} from './styles';
import { IHomeSectionOne } from './types';

const HomeSectionOne: React.FC<IHomeSectionOne> = ({ text }): ReturnComponentType => (
  <HomeSectionOneContainer>
    <ContainerWrapper>
      <HomeSectionOneTitle>
        Find true power in your data with <SelectionWord>Ensome</SelectionWord>
      </HomeSectionOneTitle>
      <HomeSectionOneText>{text}</HomeSectionOneText>
    </ContainerWrapper>
  </HomeSectionOneContainer>
);

export default memo(HomeSectionOne);
