import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import {
  ContainerWrapper,
  HomeSectionOneContainer,
  HomeSectionOneContainerContext,
  HomeSectionOneText,
  HomeSectionOneTitle,
  SelectionWord,
} from './styles';
import { IHomeSectionOne } from './types';

const HomeSectionOne: React.FC<IHomeSectionOne> = ({
  text,
  children,
}): ReturnComponentType => (
  <HomeSectionOneContainer>
    <ContainerWrapper>
      <HomeSectionOneTitle>
        Find true power in your data with <SelectionWord>Ensome</SelectionWord>
      </HomeSectionOneTitle>
      <HomeSectionOneContainerContext>
        <HomeSectionOneText>{text}</HomeSectionOneText>
        {children}
      </HomeSectionOneContainerContext>
    </ContainerWrapper>
  </HomeSectionOneContainer>
);

export default memo(HomeSectionOne);
