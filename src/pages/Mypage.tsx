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
import useAuthStatusCheck from '@hooks/useAuthStatusCheck';

type LoadingProps = {
  setLoading: (loading: boolean) => void;
};

const Mypage = ({ setLoading }: LoadingProps) => {
  const [email, setEmail] = useState('email');
  const [nickname, setNickname] = useState('닉네임');
  const [logoutStatus, setLogoutStatus] = useState<{ success?: boolean }>({});

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

  const onClickButton = async () => {
    try {
      await logoutApi();
      setLogoutStatus({ success: true });
    } catch (error) {
      console.log(error);
      setLogoutStatus({ success: false });
    }
  };

  useAuthStatusCheck({
    status: logoutStatus,
    successRoute: '/login',
    successmessage: '로그아웃 되었습니다',
    errormessage: '로그아웃 실패',
  });

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
            void onClickButton();
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
