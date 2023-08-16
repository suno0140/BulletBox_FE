import React from 'react';
import PotalContainer from 'utils/Portal';
import SimpleSlider from './Slider';
import { CloseIcon } from '@components/atoms/Icon';
import { GuideCancleBtn } from '@components/atoms/Button';
import { GuideSpan } from '@components/atoms/Span';
import {
  ModalContainer,
  ModalContentContainer,
} from '@components/atoms/Container';

type ModalProps = {
  content: string;
  isOpen: boolean;
  onClose: () => void;
};

export const GuideModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <PotalContainer>
      <ModalContainer>
        <ModalContentContainer>
          <GuideCancleBtn onClick={onClose}>
            <CloseIcon />
          </GuideCancleBtn>
          <GuideSpan>도움말</GuideSpan>
          <SimpleSlider />
        </ModalContentContainer>
      </ModalContainer>
    </PotalContainer>
  );
};
