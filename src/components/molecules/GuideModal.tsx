import React from 'react';
import PortalContainer from 'utils/Portal';
import SimpleSlider from './Slider';
import { CloseIcon } from '@components/atoms/Icon';
import { ModalCancleBtn } from '@components/atoms/Button';
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
    <PortalContainer>
      <ModalContainer>
        <ModalContentContainer>
          <ModalCancleBtn onClick={onClose}>
            <CloseIcon />
          </ModalCancleBtn>
          <GuideSpan>도움말</GuideSpan>
          <SimpleSlider />
        </ModalContentContainer>
      </ModalContainer>
    </PortalContainer>
  );
};
