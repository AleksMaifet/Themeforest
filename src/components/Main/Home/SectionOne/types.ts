import { ReactNode } from 'react';

export interface IHomeSectionOne {
  title: ReactNode;
  text: string;
  spacing?: number;
  flex?: {
    justifyContent?: string;
    alignItems?: string;
  };
  children: ReactNode;
}
