import React, { useState, useEffect, useContext } from 'react';
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

import { AuthContext } from '@core/AuthContext';
import { getUserInfoApi } from '@api/MypageApi';
import CategoryList from '@components/molecules/CategoryList';
import { getCategoryApi } from '@api/CategoryApi';

const Mypage = () => {
  const [email, setEmail] = useState('email');
  const [nickname, setNickname] = useState('닉네임');
  const [categoryList, setCategoryList] = useState([]);

  const { user } = useContext(AuthContext);

  // const { request: logoutRequest } = useRequest({
  //   apiFunc: logoutApi,
  //   reduxKey: 'AUTH_LOGOUT',
  //   successMessage: '로그아웃 성공',
  //   errorMessage: '로그아웃 실패',
  // });

  // const { request: userInfoRequest } = useRequest({
  //   apiFunc: getUserInfoApi,
  //   reduxKey: 'GET_USER_INFO',
  // });

  // const { request: categoryRequest } = useRequest({
  //   apiFunc: getCategoryApi,
  //   reduxKey: 'GET_CATEGORY',
  // });

  // useEffect(() => {
  //   if (!userDataLoading && user) {
  //     userInfoRequest({ user, setEmail, setNickname });
  //     categoryRequest({ user, setCategoryList });
  //   }
  // }, [user, userDataLoading]);

  const onClickButton = () => {
    void logoutApi();
  };

  return (
    <>
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
      <FlexContainer>
        <MypageBtn>카테고리</MypageBtn>
        <MypageBtn>루틴</MypageBtn>
      </FlexContainer>
      <MypageListContainer>
        <CategoryList categories={categoryList} />
      </MypageListContainer>
    </>
  );
};
export default Mypage;
