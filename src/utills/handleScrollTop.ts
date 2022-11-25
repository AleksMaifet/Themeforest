import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { ReturnComponentType } from '@/commonTypes';
import { DEFAULT_SCROLL_VALUE } from '@/constants';

export const ScrollToTop = (): ReturnComponentType => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: DEFAULT_SCROLL_VALUE, behavior: 'smooth' });
  }, [pathname]);

  return null;
};
