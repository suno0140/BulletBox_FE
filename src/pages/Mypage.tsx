import React from 'react';
import { logoutApi } from '@api/AuthApi';
import {
  LogoutBtnContainer,
  MypageListContainer,
  UserInfoContainer,
} from '@components/atoms/Container';
import { LogoutBtn, MypageBtn } from '@components/atoms/Button';
import { LogoutIcon, MypageIcon } from '@components/atoms/Icon';
import { FlexContainer } from '@components/atoms/Container';
import { DefaultBoldSpan, GrayBoldSpan } from '@components/atoms/Span';

import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '@components/atoms/toast';
import { localEmail, localNickName } from '@core/localStorage';
import CategoryList from '@components/molecules/CategoryList';

const Mypage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('uid');

    try {
      await logoutApi();
      navigate('/login');
      successToast('로그아웃 성공');
    } catch (error) {
      console.log(error);
      errorToast('로그아웃 실패');
    }
  };

  return (
    <>
      <FlexContainer>
        <MypageIcon />
        <UserInfoContainer>
          {localNickName ? (
            <DefaultBoldSpan>{localNickName}</DefaultBoldSpan>
          ) : (
            <DefaultBoldSpan> Guest 로그인</DefaultBoldSpan>
          )}
          {localEmail ? (
            <GrayBoldSpan>{localEmail}</GrayBoldSpan>
          ) : (
            <GrayBoldSpan>guest@example.com</GrayBoldSpan>
          )}
        </UserInfoContainer>
        <LogoutBtnContainer>
          <LogoutBtn
            onClick={() => {
              void handleLogout();
            }}
          >
            <LogoutIcon />
          </LogoutBtn>
          <DefaultBoldSpan>로그아웃</DefaultBoldSpan>
        </LogoutBtnContainer>
      </FlexContainer>
      <FlexContainer>
        <MypageBtn>카테고리</MypageBtn>
        <MypageBtn>루틴</MypageBtn>
      </FlexContainer>
      <MypageListContainer>
        <CategoryList />
      </MypageListContainer>
    </>
  );
};
export default Mypage;
