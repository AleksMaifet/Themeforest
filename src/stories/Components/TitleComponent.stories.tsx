import React from 'react';

import { Story } from '@storybook/react';
import TitleComponent from 'src/components/Title';

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
