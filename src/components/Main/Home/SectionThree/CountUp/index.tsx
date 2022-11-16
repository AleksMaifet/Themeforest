import React, { memo } from 'react';

import CountUp from 'react-countup';

import { ReturnComponentType } from '@/commonTypes';
import { STARTED_VALUE_COUNT } from '@/constants';

import { CountContainerWrapper, CountWrapper, HomeSectionText } from './styles';
import { ICountUpContainer } from './types';

const CountUpContainer: React.FC<ICountUpContainer> = ({
  isView,
  end,
  duration,
  title,
  suffix,
}): ReturnComponentType => (
  <CountContainerWrapper>
    <CountWrapper>
      <CountUp
        scrollSpyOnce
        duration={duration}
        end={isView ? end : STARTED_VALUE_COUNT}
        suffix={suffix}
      />
    </CountWrapper>
    <HomeSectionText>{title}</HomeSectionText>
  </CountContainerWrapper>
);

export default memo(CountUpContainer);
