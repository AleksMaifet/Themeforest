import React, { memo } from 'react';

import { Card } from 'antd';

import { ReturnComponentType } from '@/commonTypes';
import theme from '@/theme';

import { Line } from './styles';
import { IBenefit } from './types';

const style = {
  width: theme.spaces[17] * 2,
  boxShadow: theme.boxShadows[2],
  overflow: 'hidden',
};

const Benefit: React.FC<IBenefit> = ({ title, text, children }): ReturnComponentType => (
  <Card style={style}>
    {children}
    <Line>{title}</Line>
    {text}
  </Card>
);

export default memo(Benefit);
