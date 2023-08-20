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

import useStatusCheck from '@hooks/useStatusCheck';
import { AuthContext } from '@core/AuthContext';
import { getUserInfoApi } from '@api/MypageApi';
import CategoryList from '@components/molecules/CategoryList';
import { getCategoryApi } from '@api/CategoryApi';
import { LoadingProps } from '@core/Router';

const Mypage = ({ setLoading }: LoadingProps) => {
  const [email, setEmail] = useState('email');
  const [nickname, setNickname] = useState('닉네임');
  const [categoryList, setCategoryList] = useState([]);
  const [logoutStatus, setLogoutStatus] = useState<{ success?: boolean }>({});

  const { user, userDataLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = () => {
      try {
        setLoading(true);

        if (!userDataLoading && user) {
          getUserInfoApi({ user, setEmail, setNickname });
          getCategoryApi({ user, setCategoryList });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

  useStatusCheck({
    status: logoutStatus,
    successRoute: '/login',
    successmessage: '로그아웃 되었습니다',
    errormessage: '로그아웃 실패',
  });

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
