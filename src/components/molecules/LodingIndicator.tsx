import React from 'react';
import { ClipLoader } from 'react-spinners';
import { LoadingIndicatorContainer } from '@components/atoms/Container';
import PotalContainer from 'utils/Portal';

const LoadingIndicator = () => {
  return (
    <PotalContainer>
      <LoadingIndicatorContainer>
        <ClipLoader size={80} color={'var(--color-main)'} loading={true} />
      </LoadingIndicatorContainer>
    </PotalContainer>
  );
};

export default LoadingIndicator;
