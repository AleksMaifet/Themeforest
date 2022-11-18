import { ReactElement, ReactNode } from 'react';

export interface IFifthSection {
  title: ReactNode;
  children: ReactNode;
  autoPlay?: boolean;
  prevController?: ReactElement;
  nextController?: ReactElement;
}
