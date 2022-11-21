import { ReactNode } from 'react';

import { initialState } from './reducer';

export interface IProvider {
  children: ReactNode;
}

export type initialStateType = typeof initialState;

export interface IContextProps {
  state: initialStateType;
  dispatch: ({ type }: { type: any; payload: any }) => void;
}
