import React from 'react';

import { Story } from '@storybook/react';
import SecondaryButton from 'src/components/Buttons/SecondaryButton';

export default {
  title: 'Components',
  component: SecondaryButton,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    onClick: { action: 'Clicked' },
  },
};

const Template: Story<any> = ({ title, styleOptions, color, backgroundColor }) => (
  <SecondaryButton
    title={title}
    styleOptions={{
      ...styleOptions,
      color,
      backGroundColor: backgroundColor,
    }}
  />
);

export const SecondaryButtonExample = Template.bind({});

SecondaryButtonExample.args = {
  title: 'Button',
  styleOptions: {
    width: 150,
    padding: 10,
  },
};
