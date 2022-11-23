import React from 'react';

import { ReturnComponentType } from 'src/commonTypes';
import FirstSection from 'src/components/Main/Contacts/SectionOne';

import SecondSelectionWordText from '@/components/Main/Contacts/SectionOne/SecondSelectionWordText';

export default {
  title: 'ContactsPageSections',
  component: FirstSection,
};

const Template = (): ReturnComponentType => (
  <FirstSection title={<SecondSelectionWordText />} />
);

export const FirstSectionExample = Template.bind({});
