import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import SectionOne from '@/components/Main/Contacts/SectionOne';

import SecondSelectionWordText from './SectionOne/SecondSelectionWordText';
import { MainContainer } from './styles';

const ContactsPage = (): ReturnComponentType => (
  <MainContainer>
    <SectionOne title={<SecondSelectionWordText />} />
  </MainContainer>
);

export default ContactsPage;
