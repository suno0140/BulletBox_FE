import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MypageApi } from '@api/MypageApi';
import { useLogout } from '@api/LogoutApi';

import { ColumnBox, LogoutBtnContainer, MyDetailInfo } from '@components/Div';
import { LogoutBtn } from '@components/Button';
import { LogoutImg, MypageLogo } from '@components/Logo';
import { Flexbox } from '@components/Div';
import { DefaultBoldSpan, GrayBoldText } from '@components/Span';
import { useErrorToast } from '@hooks/useSnackBar';

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
        navigate('/login');
      })
      .catch(() => {
        useErrorToast('로그아웃 실패.');
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
