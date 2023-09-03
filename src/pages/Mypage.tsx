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

import CategoryList from '@components/molecules/CategoryList';
import { useLocation, useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '@components/atoms/toast';
import { localEmail, localNickName } from '@core/localStorage';
import { useGetCategories } from '@hooks/useGetApi';

const Mypage = () => {
  const [reload, setReload] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  useGetCategories([location, reload]);

  return (
    <>
      <FlexContainer>
        <MypageIcon />
        <UserInfoContainer>
          {localNickName && <DefaultBoldSpan>{localNickName}</DefaultBoldSpan>}
          {localEmail && <GrayBoldSpan>{localEmail}</GrayBoldSpan>}
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
        <CategoryList setReload={setReload} />
      </MypageListContainer>
    </>
  );
};
export default Mypage;
