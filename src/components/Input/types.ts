import { StyleOptionsButtonType } from '@/components/Buttons/PrimaryButton/types';

export interface IPrimaryInput<T> {
  placeholderTitle: string;
  buttonTitle: string;
  styleOptionsInput?: T;
  styleOptionsButton?: Partial<StyleOptionsButtonType>;
}

export type styleOptionsInputType = {
  width: number;
  fontSize: number;
  backgroundColor: string;
  padding: number;
};

export type PrimaryInputWrapperType<T> = {
  styleOptions?: Partial<T>;
};
