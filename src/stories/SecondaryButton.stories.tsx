import React from 'react';

import { addDecorator, Story } from '@storybook/react';

import SecondaryButton from '@/components/Buttons/SecondaryButton';
import GlobalStyles from '@/globalStyles';

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

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
));
