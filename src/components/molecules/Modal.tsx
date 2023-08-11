import { SubmitBtn } from '@components/atoms/Button';
import React from 'react';
import { styled } from 'styled-components';

type ModalProps = {
  content: string;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ content, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContentContainer>
        {content}
        <SubmitBtn onClick={onClose}>x</SubmitBtn>
      </ModalContentContainer>
    </ModalContainer>
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
`;
