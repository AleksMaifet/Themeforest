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
    size: {
      control: {
        type: 'number',
      },
    },
    fontSize: {
      control: {
        type: 'number',
      },
    },
    onClick: { action: 'Clicked' },
  },
};

const Template: Story<any> = ({
  title,
  styleOptions,
  color,
  backgroundColor,
  onClick,
  size,
  fontSize,
}) => (
  <SecondaryButton
    title={title}
    styleOptions={{
      ...styleOptions,
      color,
      backGroundColor: backgroundColor,
    }}
    callback={onClick}
    size={size}
    fontSize={fontSize}
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
