export interface IForm {
  email: string;
  name: string;
  topic: string;
  message: string;
}

export type EmailType = Pick<IForm, 'email'>;
