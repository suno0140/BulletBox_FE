import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MypageApi } from '@api/MypageApi';
import { useLogout } from '@api/LogoutApi';

import { ColumnBox, LogoutBtnContainer, MyDetailInfo } from '@components/Div';
import { LogoutBtn } from '@components/Button';
import { LogoutImg, MypageLogo } from '@components/Logo';
import { Flexbox } from '@components/Div';
import { DefaultBoldSpan, GrayBoldText } from '@components/Span';

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
    <ColumnBox>
      <Flexbox>
        <MypageLogo />
        <MyDetailInfo>
          <DefaultBoldSpan>{nickname}</DefaultBoldSpan>
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
          <DefaultBoldSpan>로그아웃</DefaultBoldSpan>
        </LogoutBtnContainer>
      </Flexbox>
    </ColumnBox>
  );
};

export default Mypage;
