import React from 'react';
import 'antd/dist/antd.less';

import { ReturnComponentType } from '@/commonTypes';
import Header from '@/components/Header';
import HomePageMain from '@/components/Main/Home';

const App = (): ReturnComponentType => (
  <>
    <Header />
    <HomePageMain />
  </>
);

export default App;
