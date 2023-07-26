import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as icon } from '@imgs/etc/help.svg';

const Header = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/home');
  };

  return (
    <HeaderDiv>
      <SpaceDiv></SpaceDiv>
      <HeaderBtn
        onClick={() => {
          onClickHandler();
        }}
      >
        <LogoDiv>Bullet Box</LogoDiv>
      </HeaderBtn>
      <Button aria-label="Question">
        <Question_Icon />
      </Button>
    </HeaderDiv>
  );
};

export default Header;
const SpaceDiv = styled.div`
  width: 36px;
  margin-left: 20px;
`;
const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-top: 20px;
  width: 100%;
  height: 72px;
`;

const HeaderBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 108px;
`;

const LogoDiv = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: 'HeirofLightBold';
`;

const Question_Icon = styled(icon)`
  width: 100%;
  fill: var(--color-black);
`;

const Button = styled.button`
  margin-right: 20px;
  border-radius: 60%;
  background-color: white;
  border: white;
  -webkit-tap-highlight-color: transparent !important;
  :focus {
    outline: none;
  }
`;
