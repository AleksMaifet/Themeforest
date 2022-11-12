import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Header from '@/components/Header';
import HomeSectionOne from '@/components/Main/Home/SectionOne';
import { HomeFirstSection } from '@/mocks';

const { text } = HomeFirstSection;

const App = (): ReturnComponentType => (
  <>
    <Header />
    <main>
      <HomeSectionOne text={text} />
    </main>
  </>
);

export default App;
