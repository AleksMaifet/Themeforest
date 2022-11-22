import React from 'react';
import 'antd/dist/antd.less';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/components/App';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import GlobalStyles from '@/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <GlobalStyles />
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
);
