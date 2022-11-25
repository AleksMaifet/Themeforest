import React, { ForwardedRef, forwardRef, memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';

import { InputWrapper, TextAriaWrapper } from './styles';
import { FieldElementType, IPrimaryInput, StyleOptionsInputType } from './types';

const PrimaryInput = (
  {
    placeholder,
    styleOptions,
    boxShadow,
    textAria,
    top,
    bottom,
    form,
    error,
  }: IPrimaryInput<Partial<StyleOptionsInputType>>,
  ref: ForwardedRef<FieldElementType>,
): ReturnComponentType => {
  if (textAria) {
    return (
      <TextAriaWrapper
        ref={ref}
        placeholder={placeholder}
        styleOptions={styleOptions}
        top={top}
        bottom={bottom}
        name={form?.name}
        onChange={form?.onChange}
        error={error}
        onBlur={form?.onBlur}
        boxShadow={boxShadow}
      />
    );
  }

  return (
    <InputWrapper
      ref={ref}
      placeholder={placeholder}
      styleOptions={styleOptions}
      top={top}
      bottom={bottom}
      name={form?.name}
      onChange={form?.onChange}
      error={error}
      onBlur={form?.onBlur}
      boxShadow={boxShadow}
    />
  );
};

export default memo(forwardRef(PrimaryInput));
