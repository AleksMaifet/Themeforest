import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { IForm } from '@/components/Forms/types';
import PrimaryInput from '@/components/Input';
import { FORM_TITLE, schema } from '@/constants';
import theme from '@/theme';
import { sendEmailMessage } from '@/utills';

import {
  ErrorMessage,
  FormButtonWrapper,
  FormInformLine,
  FormWrapper,
  Line,
} from './styles';

const {
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_MESSAGE,
  PLACEHOLDER_NAME,
  PLACEHOLDER_THEME,
  BUTTON,
} = FORM_TITLE;

const style = {
  firstStage: {
    color: theme.colors.Black,
  },
  secondStage: {
    color: theme.colors.Black,
  },
};

const Form = (): ReturnComponentType => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema.form),
  });

  const fieldsRegister = {
    email: register('email', { required: true }),
    name: register('name', { required: true }),
    topic: register('topic', { required: true }),
    message: register('message', { required: true }),
  };

  const { email, name, message, topic } = fieldsRegister;

  const onSubmit: SubmitHandler<IForm> = data => {
    sendEmailMessage<IForm>(data);
    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInformLine>
        <Line>
          <PrimaryInput
            placeholder={PLACEHOLDER_EMAIL}
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
            placeholder={PLACEHOLDER_NAME}
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
          placeholder={PLACEHOLDER_THEME}
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
          placeholder={PLACEHOLDER_MESSAGE}
          styleOptions={style.secondStage}
          ref={message.ref}
          form={message}
          error={errors.message?.message}
          boxShadow
        />
        <ErrorMessage error={errors.message}>{errors.message?.message}</ErrorMessage>
      </Line>
      <FormButtonWrapper>
        <PrimaryButton title={BUTTON} />
      </FormButtonWrapper>
    </FormWrapper>
  );
};

export default Form;
