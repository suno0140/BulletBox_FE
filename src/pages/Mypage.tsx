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
import { LoadingProps } from '@components/types';

const Mypage = ({ setLoading }: LoadingProps) => {
  const [email, setEmail] = useState('email');
  const [nickname, setNickname] = useState('닉네임');

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        await MypageApi({ setEmail, setNickname });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
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
