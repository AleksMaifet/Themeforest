import React from 'react';
import 'antd/dist/antd.less';

import { ReturnComponentType } from '@/commonTypes';
import Header from '@/components/Header';
import HomePageMain from '@/components/Main/Home';
import Provider from '@/components/Provider';

const App = (): ReturnComponentType => (
  <Provider>
    <Header />
    <HomePageMain />
  </Provider>
);

export default App;
