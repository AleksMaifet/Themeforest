import React, { memo, useEffect, useState } from 'react';

import { GridLoader } from 'react-spinners';

import { ReturnComponentType } from '@/commonTypes';

import { SpinnerContainer } from './styles';
import { ISpinner } from './types';

const Spinner: React.FC<ISpinner> = ({ color, size }): ReturnComponentType => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(prev => !prev);
  }, []);

  return (
    <SpinnerContainer>
      <GridLoader loading={loading} color={color} size={size} />
    </SpinnerContainer>
  );
};
export default memo(Spinner);
