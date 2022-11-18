import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { Container } from './styles';
import { ISwiperController } from './types';

const SwiperController: React.FC<ISwiperController> = ({
  leftIcon,
  rightIcon,
}): ReturnComponentType => (
  <Container>
    {leftIcon}
    {rightIcon}
  </Container>
);

export default memo(SwiperController);
