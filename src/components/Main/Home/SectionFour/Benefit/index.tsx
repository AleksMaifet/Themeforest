import React from 'react';

import { Card } from 'antd';

import { ReturnComponentType } from '@/commonTypes';
import theme from '@/theme';

import { IBenefit } from './types';

const style = {
  width: theme.spaces[17] * 2,
  height: theme.spaces[16] * 2,
  boxShadow: theme.boxShadows[2],
  overflow: 'hidden',
};

const Benefit: React.FC<IBenefit> = ({ title, text, children }): ReturnComponentType => (
  <Card style={style}>
    {children}
    {title}
    {text}
  </Card>
);

export default Benefit;
