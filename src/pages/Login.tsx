import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ColumnBox, EmptyBox } from '@components/Div';
import { BulletLogo } from '@components/Logo';
import { MainBtn } from '@components/Button';
import { JoinMembership } from '@components/Div';
import { FormInput } from '@components/Input';
import { BulletBold, MainSpan } from '@components/Span';
import { StForm } from '@components/Form';
import { LoginApi } from '@api/AuthApi';
import { useErrorToast } from '@hooks/useSnackBar';
import { LoadingProps } from '@components/types';

const Login = ({ setLoading }: LoadingProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailCheck = e.currentTarget.value;
    setEmail(emailCheck);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordCheck = e.currentTarget.value;
    setPassword(passwordCheck);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    LoginApi({ email, password })
      .then(() => {
        navigate('/main');
      })
      .catch(() => {
        useErrorToast('로그인 실패. 이메일과 비밀번호를 확인해주세요.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const LoginHandle = () => {
    navigate('/signup');
  };

  return (
    <ColumnBox>
      <BulletLogo />
      <BulletBold>Bullet Box</BulletBold>
      <StForm>
        <MainSpan>Login</MainSpan>
        <FormInput
          placeholder="이메일 주소"
          name="userid"
          type="email"
          value={email}
          onChange={handleEmail}
        ></FormInput>
        <FormInput
          placeholder="패스워드"
          name="password"
          type="password"
          value={password}
          onChange={handlePassword}
        ></FormInput>

        <MainBtn
          type="submit"
          onClick={(e) => {
            handleLogin(e);
          }}
        >
          로그인
        </MainBtn>

        <JoinMembership>
          <span>아직 회원이 아니신가요?</span>
          <button
            type="button"
            onClick={() => {
              LoginHandle();
            }}
          >
            회원가입
          </button>
        </JoinMembership>
      </StForm>
      <EmptyBox />
    </ColumnBox>
  );
};

export default Login;
