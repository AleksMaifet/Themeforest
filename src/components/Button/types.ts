import { ReactElement } from 'react';

export interface IButton<T> {
  title: string;
  icon: ReactElement;
  styleOptions?: T;
}

export type StyleOptionsType = {
  color: string;
  backGroundColor: string;
};

export type ButtonWrapperType<T> = {
  styleOptions?: Partial<T>;
};
