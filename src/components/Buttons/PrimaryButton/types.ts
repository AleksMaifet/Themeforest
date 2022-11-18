import { MouseEvent, ReactElement } from 'react';

export interface IPrimaryButton<T> {
  title?: string;
  icon?: ReactElement;
  styleOptions?: T;
  isDisabled?: boolean;
  callback?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export type StyleOptionsType = {
  width: number;
  color: string;
  backGroundColor: string;
  padding: number;
  boxShadow: boolean;
};

export type PrimaryButtonWrapperType<T> = {
  styleOptions?: Partial<T>;
  flex?: string;
};
