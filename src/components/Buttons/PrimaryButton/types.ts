import { MouseEvent, ReactElement } from 'react';

export interface IPrimaryButton<T> {
  title?: string;
  icon?: ReactElement;
  styleOptions?: T;
  isDisabled?: boolean;
  callback?: (e: MouseEvent<HTMLButtonElement>) => void;
  boxShadow?: boolean;
  reverse?: boolean;
  borderRadius?: boolean;
}

export type StyleOptionsButtonType = {
  width: number;
  color: string;
  backgroundColor: string;
  padding: number;
  margin: number;
};

export type PrimaryButtonWrapperType<T> = {
  styleOptions?: Partial<T>;
  flex?: string;
  boxShadow?: boolean;
  reverse?: boolean;
  borderRadius?: boolean;
};
