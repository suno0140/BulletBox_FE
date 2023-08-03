import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EmptyBox, ImgDiv, StartTextDiv } from '@components/Div';
import { MainBtn } from '@components/Button';
import { MainLogo } from '@components/Logo';
import { StartBulletBoxSpan } from '@components/Span';
import { ColumnBox } from '@components/Div';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <ColumnBox>
      <ImgDiv>
        <MainLogo />
        <StartBulletBoxSpan>BulletBox</StartBulletBoxSpan>
      </ImgDiv>
      <StartTextDiv>당신의 할일을 담아보세요</StartTextDiv>
      <MainBtn
        onClick={() => {
          navigate('/login');
        }}
      >
        시작하기
      </MainBtn>
      <EmptyBox />
    </ColumnBox>
  );
};

export default StartPage;
