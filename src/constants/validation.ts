import { object, SchemaOf, string } from 'yup';

import { EmailType, FormHookType } from '@/hooks/types';

const enum ERROR_MESSAGE {
  REQUIRED = 'Field is required',
  MAIL = 'Invalid email format',
  MAX_SYMBOLS = 'Maximum number of characters',
  MIN_SYMBOLS = 'Minimum number of characters',
}

const enum AMOUNT_SYMBOLS {
  MAX_NAME = 50,
  MIN_THEME = 5,
  MAX_THEME = 50,
  MAX_MESSAGE = 300,
}

const formValidation: SchemaOf<FormHookType> = object({
  email: string().required(ERROR_MESSAGE.REQUIRED).email(ERROR_MESSAGE.MAIL),
  name: string()
    .required(ERROR_MESSAGE.REQUIRED)
    .max(
      AMOUNT_SYMBOLS.MAX_NAME,
      `${ERROR_MESSAGE.MAX_SYMBOLS}${AMOUNT_SYMBOLS.MAX_NAME}`,
    ),
  topic: string()
    .required(ERROR_MESSAGE.REQUIRED)
    .min(
      AMOUNT_SYMBOLS.MIN_THEME,
      `${ERROR_MESSAGE.MIN_SYMBOLS}${AMOUNT_SYMBOLS.MIN_THEME}`,
    )
    .max(
      AMOUNT_SYMBOLS.MAX_THEME,
      `${ERROR_MESSAGE.MAX_SYMBOLS}${AMOUNT_SYMBOLS.MAX_THEME}`,
    ),
  message: string().max(
    AMOUNT_SYMBOLS.MAX_MESSAGE,
    `${ERROR_MESSAGE.MAX_SYMBOLS}${AMOUNT_SYMBOLS.MAX_MESSAGE}`,
  ),
}).required();

const emailValidation: SchemaOf<EmailType> = object({
  email: string().required(ERROR_MESSAGE.REQUIRED).email(ERROR_MESSAGE.MAIL),
}).required();

export const schema = {
  form: formValidation,
  email: emailValidation,
};
