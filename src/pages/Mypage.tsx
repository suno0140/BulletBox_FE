import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MypageApi } from '@api/MypageApi';
import { useLogout } from '@api/LogoutApi';

import {
  ContainerBox,
  LogoutBtnContainer,
  MyDetailInfo,
} from '@components/DivContainer';
import { LogoutBtn } from '@components/Button';
import { LogoutImg, MypageLogo } from '@components/Logo';
import { Container } from '@components/Container';
import { DefaultBoldText, GrayBoldText } from '@components/Span';

const Mypage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    MypageApi({ setEmail, setNickname });
  }, []);

  const onClickButton = () => {
    useLogout()
      .then(() => {
        alert('로그아웃 하셨습니다.');
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContainerBox>
      <Container>
        <MypageLogo />
        <MyDetailInfo>
          <DefaultBoldText>{nickname}</DefaultBoldText>
          <GrayBoldText>{email}</GrayBoldText>
        </MyDetailInfo>
        <LogoutBtnContainer>
          <LogoutBtn
            onClick={() => {
              onClickButton();
            }}
          >
            <LogoutImg />
          </LogoutBtn>
          <DefaultBoldText>로그아웃</DefaultBoldText>
        </LogoutBtnContainer>
      </Container>
    </ContainerBox>
  );
};

export default Mypage;
