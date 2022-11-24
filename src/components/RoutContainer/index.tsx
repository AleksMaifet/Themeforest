import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from '@/commonTypes';
import { PATH } from '@/constants';

const HomePage = React.lazy(() => import('@/components/Main/Home'));
const ContactsPage = React.lazy(() => import('@/components/Main/Contacts'));

const RoutContainer = (): ReturnComponentType => (
  <Suspense fallback="Loading results...">
    <Routes>
      <Route path={PATH.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={PATH.FIFTH_PAGE_ROUTE} element={<ContactsPage />} />
    </Routes>
  </Suspense>
);

export default RoutContainer;
