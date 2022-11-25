import { MouseEvent } from 'react';

export interface ISecondaryButton<T> {
  title: string;
  styleOptions?: T;
  callback?: (e: MouseEvent<HTMLButtonElement>) => void;
  size?: number;
  fontSize?: number;
}

export type StyleOptionsType = {
  color: string;
  backGroundColor: string;
};

export type SecondaryButtonWrapperType<T> = {
  styleOptions?: Partial<T>;
  size?: number;
  fontSize?: number;
};
