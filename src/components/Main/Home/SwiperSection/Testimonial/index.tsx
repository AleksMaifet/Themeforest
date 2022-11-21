import React, { memo } from 'react';

import { Avatar, Card } from 'antd';

import { ReturnComponentType } from '@/commonTypes';
import TextContainer from '@/components/Text';
import TitleContainer from '@/components/Title';
import theme from '@/theme';

import { ITestimonial } from './types';

const style = {
  container: {
    width: theme.spaces[19] * 2,
    boxShadow: theme.boxShadows[2],
    overflow: 'hidden',
  },
  metaStyle: {
    alignItems: 'center',
  },
};

const { Meta } = Card;

const Testimonial: React.FC<ITestimonial> = ({
  value: { name, comment, image, position },
}): ReturnComponentType => (
  <Card style={style.container}>
    <Meta
      style={style.metaStyle}
      avatar={<Avatar size={65} src={image} />}
      title={<TitleContainer title={name} fontSize={theme.textSize.sm} />}
      description={<TextContainer text={position} />}
    />
    <TextContainer text={comment} top={theme.spaces[5]} maxLines={8} />
  </Card>
);

export default memo(Testimonial);
