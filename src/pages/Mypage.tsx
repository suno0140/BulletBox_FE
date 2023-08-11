import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserInfo } from '@api/MypageApi';
import { logoutApi } from '@api/AuthApi';

import {
  LogoutBtnContainer,
  UserInfoContainer,
} from '@components/atoms/Container';
import { LogoutBtn } from '@components/atoms/Button';
import { LogoutIcon, MypageIcon } from '@components/atoms/Icon';
import { FlexContainer } from '@components/atoms/Container';
import { DefaultBoldSpan, GrayBoldSpan } from '@components/atoms/Span';
import { errorToast } from '@components/atoms/toast';

type LoadingProps = {
  setLoading: (loading: boolean) => void;
};

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
        navigate('/login');
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
    <FlexContainer>
      <MypageIcon />
      <UserInfoContainer>
        <DefaultBoldSpan>{nickname}</DefaultBoldSpan>
        <GrayBoldSpan>{email}</GrayBoldSpan>
      </UserInfoContainer>
      <LogoutBtnContainer>
        <LogoutBtn
          onClick={() => {
            onClickButton();
          }}
        >
          <LogoutIcon />
        </LogoutBtn>
        <DefaultBoldSpan>로그아웃</DefaultBoldSpan>
      </LogoutBtnContainer>
    </FlexContainer>
  );
};

export default Mypage;
