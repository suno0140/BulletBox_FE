import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signOut } from '@firebase/auth';
import { FireAuth } from '@core/Firebase';

import { ReactComponent as Logo } from '@imgs/mypage/logout.svg';

const Logout = () => {
  const navigate = useNavigate();

  const onClickButton = async () => {
    try {
      await signOut(FireAuth);
      navigate('/login');
    } catch (e) {
      console.log(e);
      alert('로그아웃 실패');
    }
  };

  return (
    <LogoutBtnContainer>
      <LogoutBtn
        onClick={() => {
          void onClickButton();
        }}
      >
        <LogoutImg />
      </LogoutBtn>
      로그아웃
    </LogoutBtnContainer>
  );
};

export default Logout;

const LogoutBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  margin-left: 80px;
  color: var(--color-main);
  font-weight: bold;
`;

const LogoutBtn = styled.button`
  background-color: white;
  border: none;
`;

const LogoutImg = styled(Logo)`
  color: var(--color-main);
  width: 24px;
  height: 24px;
`;
