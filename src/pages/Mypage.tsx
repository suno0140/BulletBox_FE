import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserInfo } from '@api/MypageApi';
import { logoutApi } from '@api/AuthApi';

import { LogoutBtnContainer, MyDetailInfo } from '@components/Div';
import { LogoutBtn } from '@components/Button';
import { LogoutImg, MypageLogo } from '@components/Logo';
import { Flexbox } from '@components/Div';
import { DefaultBoldSpan, GrayBoldText } from '@components/Span';
import { LoadingProps } from '@components/types';
import { errorToast } from '@components/atoms/toast';

const Mypage = ({ setLoading }: LoadingProps) => {
  const [email, setEmail] = useState('email');
  const [nickname, setNickname] = useState('닉네임');

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        await getUserInfo({ setEmail, setNickname });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  const onClickButton = () => {
    logoutApi()
      .then(() => {
        navigate('/login');
      })
      .catch(() => {
        errorToast('로그아웃 실패.');
      });
  };

  return (
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
  );
};

export default Mypage;
