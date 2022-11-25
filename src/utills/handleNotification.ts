import { notification } from 'antd';

import { PayloadType } from './types';

export const openNotification = (payload: PayloadType): void => {
  notification.open({
    ...payload,
    placement: 'bottomLeft',
  });
};
