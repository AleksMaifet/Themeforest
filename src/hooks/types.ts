export interface IFormHook {
  email: string;
  name: string;
  topic: string;
  message: string;
}

export type FormHookType = Partial<IFormHook>;
export type EmailType = Pick<IFormHook, 'email'>;
