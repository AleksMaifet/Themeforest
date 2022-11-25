import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from '@/commonTypes';
import Spinner from '@/components/Spinner';
import { PATH } from '@/constants';
import theme from '@/theme';
import { ScrollToTop } from '@/utills';

const HomePage = React.lazy(() => import('@/components/Main/Home'));
const ContactsPage = React.lazy(() => import('@/components/Main/Contacts'));

const RoutContainer = (): ReturnComponentType => (
  <Suspense fallback={<Spinner color={theme.colors.Primary} size={theme.spaces[6]} />}>
    <ScrollToTop />
    <Routes>
      <Route path={PATH.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={PATH.FIFTH_PAGE_ROUTE} element={<ContactsPage />} />
    </Routes>
  </Suspense>
);

export default RoutContainer;
