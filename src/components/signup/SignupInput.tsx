import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignUpInput = () => {
  const navigate = useNavigate();
  const SignupHandle = () => {
    navigate('/login');
  };

  return (
    <StForm>
      <StTitle>Sign up</StTitle>
      <EmailDiv>
        <StInput placeholder="이메일 주소를 입력하세요."></StInput>
        <EmailBtn type="button"></EmailBtn>
      </EmailDiv>
      <StInput placeholder="닉네임을 입력하세요."></StInput>
      <StInput placeholder="패스워드를 입력하세요." type="password"></StInput>
      <StInput
        placeholder="패스워드를 다시 한 번 입력하세요."
        type="password"
      ></StInput>
      <StButtonBox>
        <StSignupBtn type="submit">회원가입</StSignupBtn>
      </StButtonBox>{' '}
      <CancelBtn
        type="button"
        onClick={() => {
          SignupHandle();
        }}
      >
        로그인 페이지로 돌아가기
      </CancelBtn>
    </StForm>
  );
};

export default SignUpInput;
const StForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 294px;
  height: 506px;
  border-radius: 8px;
  margin-top: 46px;
`;
const StTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 30%;
  margin-bottom: 12px;
  color: var(--color-main);
  font-family: 'HeirofLightBold';
`;

const StInput = styled.input`
  width: 100%;
  height: 48px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  border: white;
  /* color: var(--color-gray); */
  background: var(--color-default);
  border-radius: 8px;
  font-family: 'NanumGothic';
  ::placeholder {
    color: var(--color-c1-gray);
  }
`;

const EmailDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-default);
  font-size: 14px;
  border-radius: 8px;
`;

const StButtonBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`;

const EmailBtn = styled.button`
  width: 85px;
  height: 16px;
  margin-right: 3px;
  font-size: 14px;
  background: var(--color-default);
  border: none;
  border-radius: 8px;
  color: var(--color-main);
  font-weight: bold;
`;

const StSignupBtn = styled.button`
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'NanumGothic';
  color: white;
  border: white;
  background: var(--color-main);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  &:disabled {
    background: var(--color-c1-gray);
  }
`;

const CancelBtn = styled.button`
  width: 155px;
  height: 12px;
  margin-top: 16px;
  font-size: 12px;
  font-weight: 800;
  color: var(--color-gray);
  border: none;
  background-color: transparent;
`;
