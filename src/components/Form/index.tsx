import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'yup';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import PrimaryInput from '@/components/Input';
import { AMOUNT_SYMBOLS, ERROR_MESSAGE } from '@/constants';
import theme from '@/theme';

import {
  ErrorMessage,
  FormButtonWrapper,
  FormInformLine,
  FormWrapper,
  Line,
} from './styles';

const style = {
  firstStage: {
    color: theme.colors.Black,
  },
  secondStage: {
    color: theme.colors.Black,
  },
};

interface IForm {
  email: string;
  name: string;
  topic: string;
  message: string;
}

const schema = object({
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

const Form = (): ReturnComponentType => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const fieldsRegister = {
    email: register('email', { required: true }),
    name: register('name', { required: true }),
    topic: register('topic', { required: true }),
    message: register('message', { required: true }),
  };

  const { email, name, message, topic } = fieldsRegister;

  const onSubmit: SubmitHandler<IForm> = data => {
    console.log(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInformLine>
        <Line>
          <PrimaryInput
            placeholder="Your email"
            styleOptions={style.firstStage}
            ref={email.ref}
            form={email}
            error={errors.email?.message}
          />
          <ErrorMessage error={errors.email}>{errors.email?.message}</ErrorMessage>
        </Line>
        <Line>
          <PrimaryInput
            placeholder="Your name"
            styleOptions={style.firstStage}
            ref={name.ref}
            form={name}
            error={errors.name?.message}
          />
          <ErrorMessage error={errors.name}>{errors.name?.message}</ErrorMessage>
        </Line>
      </FormInformLine>
      <Line>
        <PrimaryInput
          placeholder="Theme"
          styleOptions={style.secondStage}
          ref={topic.ref}
          form={topic}
          error={errors.topic?.message}
        />
        <ErrorMessage error={errors.topic}>{errors.topic?.message}</ErrorMessage>
      </Line>
      <Line>
        <PrimaryInput
          textAria
          placeholder="Your message"
          styleOptions={style.secondStage}
          ref={message.ref}
          form={message}
          error={errors.message?.message}
        />
        <ErrorMessage error={errors.message}>{errors.message?.message}</ErrorMessage>
      </Line>
      <FormButtonWrapper>
        <PrimaryButton title="Send" />
      </FormButtonWrapper>
    </FormWrapper>
  );
};

export default Form;
