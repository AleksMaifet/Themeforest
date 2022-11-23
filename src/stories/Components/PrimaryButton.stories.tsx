import React from 'react';

import { Story } from '@storybook/react';
import PrimaryButton from 'src/components/Buttons/PrimaryButton';
import { SVG } from 'src/constants';

const { IconPlay } = SVG;

export default {
  title: 'Components',
  component: PrimaryButton,
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
    icon: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'Clicked' },
  },
};

const Template: Story<any> = ({
  title,
  boxShadow,
  isDisabled,
  borderRadius,
  onClick,
  styleOptions,
  color,
  icon,
  reverse,
  backgroundColor,
}) => (
  <PrimaryButton
    title={title}
    styleOptions={{
      ...styleOptions,
      color,
      backGroundColor: backgroundColor,
    }}
    borderRadius={borderRadius}
    isDisabled={isDisabled}
    boxShadow={boxShadow}
    callback={onClick}
    icon={icon && <IconPlay />}
    reverse={reverse}
  />
);

export const PrimaryButtonExample = Template.bind({});

PrimaryButtonExample.args = {
  title: 'Some Button Text',
  styleOptions: {
    width: 180,
    padding: 10,
  },
};
