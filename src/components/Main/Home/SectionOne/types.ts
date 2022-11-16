import { ReactNode } from 'react';

export interface IFirstSection {
  title: ReactNode;
  text: ReactNode;
  spacing?: number;
  flex?: {
    justifyContent?: string;
    alignItems?: string;
  };
  children: ReactNode;
}
