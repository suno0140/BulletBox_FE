import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderBtn, QuestionBtn } from '@components/atoms/Button';
import { QuestionIcon } from '@components/atoms/Icon';
import {
  HeaderContainer,
  HeaderLogoContainer,
  SpaceContainer,
} from '@components/atoms/Container';
import { Modal } from './Modal';

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
      <QuestionBtn aria-label="Question" onClick={handleModal}>
        <QuestionIcon />
      </QuestionBtn>
      <Modal content="modal" isOpen={isModalOpen} onClose={handleModal} />
    </HeaderContainer>
  );
};

export default Header;
