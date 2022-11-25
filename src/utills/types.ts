import { IconType } from 'antd/es/notification';

export type handleContainerStylesType = { [key: string]: string };
export type PayloadType = {
  message: string | undefined;
  type: IconType;
  duration?: number;
};
