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
import useAuthStatusCheck from '@hooks/useAuthStatusCheck';

type LoadingProps = {
  setLoading: (loading: boolean) => void;
};

const Mypage = ({ setLoading }: LoadingProps) => {
  const [email, setEmail] = useState('email');
  const [nickname, setNickname] = useState('닉네임');
  const [logoutStatus, setLogoutStatus] = useState<{ success?: boolean }>({});

  const { user, userDataLoading } = useContext(AuthContext);

  useEffect(() => {
    if (userDataLoading) {
      return;
    } else {
      void getUserInfo({ user, setEmail, setNickname, setLoading });
    }
  }, [user, userDataLoading]);

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
