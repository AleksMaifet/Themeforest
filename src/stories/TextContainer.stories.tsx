import React from 'react';

import { addDecorator, Story } from '@storybook/react';

import TextComponent from '@/components/Text';
import GlobalStyles from '@/globalStyles';

export default {
  title: 'Components',
  component: TextComponent,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template: Story<any> = ({ text, fontSize, color, width, maxLines }) => (
  <TextComponent
    text={text}
    fontSize={fontSize}
    color={color}
    width={width}
    maxLines={maxLines}
  />
);

export const TextComponentExample = Template.bind({});

TextComponentExample.args = {
  text: 'Put some text for example',
  fontSize: 3,
  width: 20,
  maxLines: 2,
};

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
));
