import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Form from '@/components/Forms/Form';

export default {
  title: 'Components',
  component: Form,
};

const Template = (): ReturnComponentType => <Form />;

export const FormExample = Template.bind({});
