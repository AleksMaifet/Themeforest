import React, { memo, useEffect } from 'react';

import { SubmitHandler } from 'react-hook-form';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import PrimaryInput from '@/components/Input';
import { NOTIFICATION, schema } from '@/constants';
import { useHandleForm } from '@/hooks';
import { EmailType } from '@/hooks/types';
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
    fieldsRegister: { email },
    formState: { errors },
    handleSubmit,
    reset,
  } = useHandleForm(schema.email);

  const onSubmit: SubmitHandler<EmailType> = data => {
    sendEmailMessage<EmailType>(data);
    reset();
  };

  useEffect(() => {
    if (errors.email?.message) {
      openNotification({ message: errors.email?.message, type: ERROR.type });
    }
  });

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <PrimaryInput
        placeholder={placeholderTitle}
        styleOptions={styleOptionsInput}
        ref={email.ref}
        form={email}
        error={errors.email?.message}
      />
      <PrimaryButton title={buttonTitle} styleOptions={styleOptionsButton} />
    </FormWrapper>
  );
};

export default memo(EmailForm);
