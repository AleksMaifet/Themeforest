import { ReactElement, ReactNode } from 'react';

export interface IFifthSection {
  title: ReactNode;
  children: ReactNode;
  autoPlay?: boolean;
  spaceBetween?: number;
  prevController?: ReactElement;
  nextController?: ReactElement;
}
