import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Breadcrumb from '@/components/Breadcrumb';

import SectionOne from './SectionOne';
import SecondSelectionWordText from './SectionOne/SecondSelectionWordText';
import SectionTwo from './SectionTwo';
import { MainContainer } from './styles';

const ContactsPage = (): ReturnComponentType => (
  <MainContainer>
    <Breadcrumb />
    <SectionOne title={<SecondSelectionWordText />} />
    <SectionTwo />
  </MainContainer>
);

export default ContactsPage;
