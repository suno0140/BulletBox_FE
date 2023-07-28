import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as Logo } from '@imgs/mypage/logo-graphic.svg';
import Logout from '@components/mypage/Logout';
import { getDatabase, ref, onValue } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
import { FireAuth } from '@core/Firebase';

const Mypage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');

  type UserData = {
    email: string;
    nickname: string;
  };

  useEffect(() => {
    onAuthStateChanged(FireAuth, (user) => {
      if (user) {
        const db = getDatabase();
        const userRef = ref(db, 'users/' + user.uid);

        onValue(userRef, (snapshot) => {
          const data: UserData = snapshot.val() as UserData;
          setEmail(data.email);
          setNickname(data.nickname);
        });
      }
    });
  }, []);

  return (
    <Container>
      <MyInfo>
        <LogoDiv>
          <MainLogo />
        </LogoDiv>
        <MyDetailInfo>
          <NicknameTag>{nickname}</NicknameTag>
          <EmailTag>{email}</EmailTag>
        </MyDetailInfo>
        <Logout />
      </MyInfo>
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MyInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
  padding-left: 27px;
  padding-bottom: 20px;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid var(--color-default);
`;
const MyDetailInfo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 123px;
  height: 41px;
  margin-left: 14px;
  font-size: 14px;
  letter-spacing: 0.4px;
`;

const LogoDiv = styled.div`
  width: 48px;
  height: 48px;
`;
const MainLogo = styled(Logo)`
  fill: white;
  background-color: var(--color-main);
  border-radius: 50%;
`;

const EmailTag = styled.span`
  font-size: 12px;
  color: #7c7c7c;
  font-weight: bold;
`;

const NicknameTag = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
