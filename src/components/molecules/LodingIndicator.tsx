import React from 'react';
import { ClipLoader } from 'react-spinners';
import { LoadingIndicatorContainer } from '@components/atoms/Container';

const LoadingIndicator = () => {
  return (
    <LoadingIndicatorContainer>
      <ClipLoader size={80} color={'var(--color-main)'} loading={true} />
    </LoadingIndicatorContainer>
  );
};

export default LoadingIndicator;
