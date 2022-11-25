import React, { memo, useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { EmailType } from '@/components/Forms/types';
import PrimaryInput from '@/components/Input';
import { NOTIFICATION, schema } from '@/constants';
import { openNotification, sendEmailMessage } from '@/utills';

import { FormWrapper } from './styles';
import { IEmailForm } from './types';

const { ERROR } = NOTIFICATION;

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

  const { email } = errors;

  const fieldEmail = register('email', { required: true });

  const onSubmit: SubmitHandler<EmailType> = data => {
    sendEmailMessage<EmailType>(data);
    reset();
  };

  useEffect(() => {
    if (email?.message) {
      openNotification({ message: email?.message, type: ERROR.type });
    }
  });

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <PrimaryInput
        placeholder={placeholderTitle}
        styleOptions={styleOptionsInput}
        ref={fieldEmail.ref}
        form={fieldEmail}
        error={email?.message}
      />
      <PrimaryButton title={buttonTitle} styleOptions={styleOptionsButton} />
    </FormWrapper>
  );
};

export default memo(EmailForm);
