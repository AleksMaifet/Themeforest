import React, { memo } from 'react';

import { Card } from 'antd';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from '@/components/Image';
import TextComponent from '@/components/Text';
import TitleComponent from '@/components/Title';
import theme from '@/theme';

import { IBlog } from './types';

const { Meta } = Card;

const style = {
  container: {
    width: theme.size.xs,
    boxShadow: theme.boxShadows[2],
    overflow: 'hidden',
  },
  buttonStyle: {
    width: theme.spaces[14],
    backgroundColor: 'none',
    color: theme.colors.Primary,
  },
};

const Blog: React.FC<IBlog> = ({
  value: {
    title,
    text,
    image,
    date,
    button: { buttonTitle, ButtonImage },
  },
}): ReturnComponentType => (
  <Card style={style.container}>
    <Image context={image} />
    <Meta
      description={
        <TextComponent text={date} top={theme.spaces[4]} bottom={theme.spaces[2]} />
      }
    />
    <TitleComponent
      title={title}
      top={theme.spaces[2]}
      bottom={theme.spaces[2]}
      fontSize={theme.textSize.md}
    />
    <Meta description={<TextComponent text={text} maxLines={4} />} />
    <PrimaryButton
      title={buttonTitle}
      styleOptions={style.buttonStyle}
      reverse
      icon={<ButtonImage />}
    />
  </Card>
);

export default memo(Blog);
