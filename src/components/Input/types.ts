import { ChangeEvent, FocusEventHandler } from 'react';

export type FieldElementType = HTMLInputElement & HTMLTextAreaElement;

export interface IPrimaryInput<T> {
  textAria?: boolean;
  placeholder?: string;
  styleOptions?: T;
  top?: number;
  bottom?: number;
  form?: {
    onChange: (e: ChangeEvent<FieldElementType>) => void;
    name: string;
    onBlur: FocusEventHandler<FieldElementType>;
  };
  error?: string | boolean;
  boxShadow?: boolean;
}

export type StyleOptionsInputType = {
  fontSize: number;
  backgroundColor: string;
  color: string;
  padding: number;
};

export type PrimaryInputWrapperType<T> = {
  styleOptions?: Partial<T>;
  top?: number;
  bottom?: number;
  error?: string | boolean;
  boxShadow?: boolean;
};
