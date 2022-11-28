import { SvgElementType } from '@/commonTypes';

export interface IBlog {
  value: {
    id: string;
    image: string;
    title: string;
    date: string;
    text: string;
    button: {
      buttonTitle: string;
      ButtonImage: SvgElementType;
    };
  };
}
