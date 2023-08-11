import React from 'react';
import { styled } from 'styled-components';
import PotalContainer from 'Portal';

type ModalProps = {
  content: string;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ content, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <PotalContainer>
      <ModalContainer>
        <button onClick={onClose}>x</button>
        <ModalContentContainer>{content}</ModalContentContainer>
      </ModalContainer>
    </PotalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContentContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  height: 505px;
`;
