import React, { useMemo, useReducer } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { Context } from './contex';
import { appReducer, initialState } from './reducer';
import { IProvider } from './types';

const Provider: React.FC<IProvider> = ({ children }): ReturnComponentType => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
