import { StyleOptionsButtonType } from '@/components/Buttons/PrimaryButton/types';
import { StyleOptionsInputType } from '@/components/Input/types';

export interface IEmailForm {
  placeholderTitle: string;
  buttonTitle: string;
  styleOptionsInput?: Partial<StyleOptionsInputType>;
  styleOptionsButton?: Partial<StyleOptionsButtonType>;
}
