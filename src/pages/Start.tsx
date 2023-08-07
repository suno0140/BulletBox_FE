import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  EmptyContainer,
  ImgContainer,
  StartTextContainer,
} from '@components/atoms/Container';
import { MainBtn } from '@components/atoms/Button';
import { MainIcon } from '@components/atoms/Icon';
import { StartBulletBoxSpan } from '@components/atoms/Span';
import { ColumnContainer } from '@components/atoms/Container';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <ColumnContainer>
      <ImgContainer>
        <MainIcon />
        <StartBulletBoxSpan>BulletBox</StartBulletBoxSpan>
      </ImgContainer>
      <StartTextContainer>당신의 할일을 담아보세요</StartTextContainer>
      <MainBtn
        onClick={() => {
          navigate('/login');
        }}
      >
        시작하기
      </MainBtn>
      <EmptyContainer />
    </ColumnContainer>
  );
};

export default StartPage;
