import React from 'react';

import { Story } from '@storybook/react';

import Spinner from '@/components/Spinner';

export default {
  title: 'Components',
  component: Spinner,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
  },
};

const Template: Story<any> = ({ color, size }) => <Spinner color={color} size={size} />;

export const SpinnerComponentExample = Template.bind({});
