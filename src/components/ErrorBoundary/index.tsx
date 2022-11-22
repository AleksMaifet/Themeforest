import React, { PureComponent, ReactNode } from 'react';

import { ERROR_TITLE } from '@/constants';

import { ErrorContainer, ErrorText } from './styles';
import { IProps, IState } from './types';

export class ErrorBoundary extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): IState {
    return {
      hasError: true,
    };
  }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <ErrorContainer>
          <ErrorText>{ERROR_TITLE}</ErrorText>
        </ErrorContainer>
      );
    }
    return <div>{children}</div>;
  }
}
