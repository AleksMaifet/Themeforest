import { ReactElement } from 'react';

export interface IPrimaryButton<T> {
  title: string;
  icon: ReactElement;
  styleOptions?: T;
}

export type StyleOptionsType = {
  color: string;
  backGroundColor: string;
};

export type PrimaryButtonWrapperType<T> = {
  styleOptions?: Partial<T>;
};
