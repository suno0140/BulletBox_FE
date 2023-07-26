import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { FireAuth } from '@core/Firebase';

const LogInInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailCheck = e.target.value;
    setEmail(emailCheck);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordCheck = e.target.value;
    setPassword(passwordCheck);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    signInWithEmailAndPassword(FireAuth, email, password)
      .then((e) => {
        alert('로그인 성공');
        console.log(e);
        navigate('/mypage');
      })
      .catch((e) => {
        console.log(e);
        alert('로그인 실패. 이메일과 비밀번호를 확인해주세요.');
      });
  };

  const LoginHandle = () => {
    navigate('/signup');
  };

  return (
    <StForm>
      <StTitle>Login</StTitle>
      <StInput
        placeholder="이메일 주소"
        name="userid"
        type="email"
        value={email}
        onChange={handleEmail}
      ></StInput>
      <StInput
        placeholder="패스워드"
        name="password"
        type="password"
        value={password}
        onChange={handlePassword}
      ></StInput>
      <StSpanDiv>
        <StSpanTag></StSpanTag>
      </StSpanDiv>
      <StButtonBox>
        <StLoginBtn type="submit" onClick={handleLogin}>
          로그인
        </StLoginBtn>
      </StButtonBox>
      <UserInfoBox>
        <SignupDiv>
          <SignUpSpan>아직 회원이 아니신가요?</SignUpSpan>
          <StSignupBtn
            type="button"
            onClick={() => {
              LoginHandle();
            }}
          >
            회원가입
          </StSignupBtn>
        </SignupDiv>
      </UserInfoBox>
    </StForm>
  );
};

export default LogInInput;

const StForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  width: 100%;
  height: 300px;
  background: white;
  border-radius: 8px;git 
`;
const StTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
  height: 22px;
  color: var(--color-main);
  font-family: 'HeirofLightBold';
`;

const StInput = styled.input`
  width: 80%;
  height: 48px;
  margin-top: 15px;
  border: white;
  font-size: 16px;
  font-family: 'NanumGothic';
  font-weight: bold;
  background: var(--color-default);
  border-radius: 8px;
  ::placeholder {
    font-family: 'NanumGothic';
    font-size: 14px;
    font-weight: bold;
    color: var(--color-c1-gray);
    padding-right: 1em;
  }
`;

const StSpanDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const StSpanTag = styled.span`
  font-size: 12px;
  font-weight: bold;
  font-family: 'NanumGothic';
`;

const StButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 16px;
`;

const StLoginBtn = styled.button`
  width: 80%;
  height: 48px;
  font-family: 'NanumGothic';
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: white;
  background: var(--color-main);
  border-radius: 8px;
  &:disabled {
    color: white;
    background-color: var(--color-c1-gray);
  }
`;

const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 222px;
  height: 11px;
  color: var(--color-gray);
  font-weight: bold;
`;

const SignupDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11px;
`;

const StSignupBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 10px;
  font-family: 'NanumGothic';
  font-weight: bold;
  color: var(--color-main);
`;

const SignUpSpan = styled.span`
  color: var(--color-gray);
  font-size: 8px;
  font-weight: bold;
`;
