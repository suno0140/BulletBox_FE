import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutApi } from '@api/AuthApi';
import {
  LogoutBtnContainer,
  UserInfoContainer,
} from '@components/atoms/Container';
import { LogoutBtn } from '@components/atoms/Button';
import { LogoutIcon, MypageIcon } from '@components/atoms/Icon';
import { FlexContainer } from '@components/atoms/Container';
import { DefaultBoldSpan, GrayBoldSpan } from '@components/atoms/Span';
import { AuthContext } from '@core/AuthContext';
import { getUserInfo } from '@api/MypageApi';

type LoadingProps = {
  setLoading: (loading: boolean) => void;
};

const Mypage = ({ setLoading }: LoadingProps) => {
  const [email, setEmail] = useState('email');
  const [nickname, setNickname] = useState('닉네임');

  const navigate = useNavigate();
  const { user, userDataLoading } = useContext(AuthContext);

  useEffect(() => {
    if (userDataLoading) {
      return;
    } else {
      void getUserInfo({ user, setEmail, setNickname, setLoading });
    }
  }, [user, userDataLoading]);

  const onClickButton = () => {
    void logoutApi(navigate);
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
