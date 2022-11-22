import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Provider from '@/components/Provider';
import RoutContainer from '@/components/RoutContainer';

const App = (): ReturnComponentType => (
  <Provider>
    <Header />
    <RoutContainer />
    <Footer />
  </Provider>
);

export default App;
