import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Form from '@/components/Forms/Form';
import { FORM_TITLE } from '@/constants';

export default {
  title: 'Components',
  component: Form,
};

const Template = (): ReturnComponentType => <Form value={FORM_TITLE} />;

export const FormExample = Template.bind({});
