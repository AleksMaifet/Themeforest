import React, { memo } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { EmailType } from '@/components/Forms/types';
import PrimaryInput from '@/components/Input';
import { schema } from '@/constants';
import { sendEmailMessage } from '@/utills';

import { FormWrapper } from './styles';
import { IEmailForm } from './types';

const EmailForm: React.FC<IEmailForm> = ({
  placeholderTitle,
  styleOptionsInput,
  buttonTitle,
  styleOptionsButton,
}): ReturnComponentType => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailType>({
    resolver: yupResolver(schema.email),
  });

  const fieldEmail = register('email', { required: true });

  const onSubmit: SubmitHandler<EmailType> = data => {
    sendEmailMessage<EmailType>(data);
    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <PrimaryInput
        placeholder={placeholderTitle}
        styleOptions={styleOptionsInput}
        ref={fieldEmail.ref}
        form={fieldEmail}
        error={errors.email?.message}
      />
      <PrimaryButton title={buttonTitle} styleOptions={styleOptionsButton} />
    </FormWrapper>
  );
};

export default memo(EmailForm);
