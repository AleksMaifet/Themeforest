import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { SchemaOf } from 'yup';

import { EmailType, FormHookType, IFormHook } from './types';

export const useHandleForm = (validation: SchemaOf<FormHookType | EmailType>): any => {
  const { register, reset, handleSubmit, formState, resetField } = useForm<IFormHook>({
    resolver: yupResolver(validation),
  });

  const fieldsRegister = {
    email: register('email', { required: true }),
    name: register('name', { required: true }),
    topic: register('topic', { required: true }),
    message: register('message', { required: true }),
  };

  return { fieldsRegister, reset, handleSubmit, formState, resetField };
};
