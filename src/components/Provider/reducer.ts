import { AppHandlerType } from '@/constants';

import { initialStateType } from './types';

export const initialState = {
  isVideoShow: false,
};

export const appReducer = (
  state = initialState,
  { payload, type }: AppHandlerType,
): initialStateType => {
  switch (type) {
    case 'APP/SET-SHOW-VIDEO':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
