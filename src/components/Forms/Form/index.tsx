import React, { memo } from 'react';

import { SubmitHandler } from 'react-hook-form';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import PrimaryInput from '@/components/Input';
import { schema } from '@/constants';
import { useHandleForm } from '@/hooks';
import { IFormHook } from '@/hooks/types';
import theme from '@/theme';
import { sendEmailMessage } from '@/utills';

import {
  ErrorMessage,
  FormButtonWrapper,
  FormInformLine,
  FormWrapper,
  Line,
} from './styles';
import { IForm } from './types';

const style = {
  firstStage: {
    color: theme.colors.Black,
  },
  secondStage: {
    color: theme.colors.Black,
  },
};

const Form: React.FC<IForm> = ({
  value: {
    emailPlaceholder,
    messagePlaceholder,
    namePlaceholder,
    themePlaceholder,
    buttonTitle,
  },
}): ReturnComponentType => {
  const {
    fieldsRegister,
    formState: { errors },
    handleSubmit,
    reset,
  } = useHandleForm(schema.form);

  const { email, name, message, topic } = fieldsRegister;

  const onSubmit: SubmitHandler<IFormHook> = data => {
    sendEmailMessage<IFormHook>(data);
    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInformLine>
        <Line>
          asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          <PrimaryInput
            placeholder={emailPlaceholder}
            styleOptions={style.firstStage}
            ref={email.ref}
            form={email}
            error={errors.email?.message}
            boxShadow
          />
          <ErrorMessage error={errors.email}>{errors.email?.message}</ErrorMessage>
        </Line>
        <Line>
          <PrimaryInput
            placeholder={namePlaceholder}
            styleOptions={style.firstStage}
            ref={name.ref}
            form={name}
            error={errors.name?.message}
            boxShadow
          />
          <ErrorMessage error={errors.name}>{errors.name?.message}</ErrorMessage>
        </Line>
      </FormInformLine>
      <Line>
        <PrimaryInput
          placeholder={themePlaceholder}
          styleOptions={style.secondStage}
          ref={topic.ref}
          form={topic}
          error={errors.topic?.message}
          boxShadow
        />
        <ErrorMessage error={errors.topic}>{errors.topic?.message}</ErrorMessage>
      </Line>
      <Line>
        <PrimaryInput
          textAria
          placeholder={messagePlaceholder}
          styleOptions={style.secondStage}
          ref={message.ref}
          form={message}
          error={errors.message?.message}
          boxShadow
        />
        <ErrorMessage error={errors.message}>{errors.message?.message}</ErrorMessage>
      </Line>
      <FormButtonWrapper>
        <PrimaryButton title={buttonTitle} />
      </FormButtonWrapper>
    </FormWrapper>
  );
};

export default memo(Form);
