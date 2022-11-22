import React from 'react';
import 'antd/dist/antd.less';

import { ReturnComponentType } from '@/commonTypes';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HomePageMain from '@/components/Main/Home';
import Provider from '@/components/Provider';

const App = (): ReturnComponentType => (
  <Provider>
    <Header />
    <HomePageMain />
    <Footer />
  </Provider>
);

export default App;
