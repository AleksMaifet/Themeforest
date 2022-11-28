export interface IFormHook {
  email: string;
  name: string;
  topic: string;
  message: string;
}

export type EmailType = Pick<IFormHook, 'email'>;

export interface IForm {
  value: {
    emailPlaceholder: string;
    messagePlaceholder: string;
    namePlaceholder: string;
    themePlaceholder: string;
    buttonTitle: string;
  };
}
