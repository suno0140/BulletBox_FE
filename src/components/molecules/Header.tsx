import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderBtn, QuestionBtn } from '@components/atoms/Button';
import { QuestionIcon } from '@components/atoms/Icon';
import {
  HeaderContainer,
  HeaderLogoContainer,
  SpaceContainer,
} from '@components/atoms/Container';

const Header = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/home');
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
      <QuestionBtn aria-label="Question">
        <QuestionIcon />
      </QuestionBtn>
    </HeaderContainer>
  );
};

export default Header;
