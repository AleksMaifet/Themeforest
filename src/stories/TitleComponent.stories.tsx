import React from 'react';

import { addDecorator, Story } from '@storybook/react';

import TitleComponent from '@/components/Title';
import GlobalStyles from '@/globalStyles';

export default {
  title: 'Components',
  component: TitleComponent,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template: Story<any> = ({ title, fontSize, color }) => (
  <TitleComponent title={title} fontSize={fontSize} color={color} />
);

export const TitleComponentExample = Template.bind({});

TitleComponentExample.args = {
  title: 'SomeText',
  fontSize: 3,
};

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
));
