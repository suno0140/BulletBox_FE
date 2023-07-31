import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImgDiv, ContainerBox, StartTextDiv } from '@components/DivContainer';
import { MainBtn } from '@components/Button';
import { MainLogo } from '@components/Logo';
import { StartBulletBoxText } from '@components/Span';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <ContainerBox>
      <ImgDiv>
        <MainLogo />
        <StartBulletBoxText>BulletBox</StartBulletBoxText>
      </ImgDiv>
      <StartTextDiv>당신의 할일을 담아보세요</StartTextDiv>
      <MainBtn
        onClick={() => {
          navigate('/login');
        }}
      >
        시작하기
      </MainBtn>
    </ContainerBox>
  );
};

export default StartPage;
