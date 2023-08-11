import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderBtn, GuideBtn } from '@components/atoms/Button';
import { QuestionIcon } from '@components/atoms/Icon';
import {
  HeaderContainer,
  HeaderLogoContainer,
  SpaceContainer,
} from '@components/atoms/Container';
import { GuideModal } from './Modal';
import ModalPortal from 'Portal';

const Header = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickHandler = () => {
    navigate('/home');
  };

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <SpaceContainer></SpaceContainer>
      <HeaderBtn
        onClick={() => {
          onClickHandler();
        }}
      >
        <HeaderLogoContainer>Bullet Box</HeaderLogoContainer>
      </HeaderBtn>
      <GuideBtn aria-label="Question" onClick={handleModal}>
        <QuestionIcon />
      </GuideBtn>
      <ModalPortal>
        <GuideModal content="" isOpen={isModalOpen} onClose={handleModal} />
      </ModalPortal>
    </HeaderContainer>
  );
};

export default Header;
