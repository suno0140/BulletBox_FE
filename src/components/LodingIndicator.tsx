import React from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const StyledLoadingIndicator = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingIndicator = () => {
  return (
    <StyledLoadingIndicator>
      <ClipLoader size={80} color={'var(--color-main)'} loading={true} />
    </StyledLoadingIndicator>
  );
};

export default LoadingIndicator;
