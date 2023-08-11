import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ColumnContainer, EmptyContainer } from '@components/atoms/Container';
import { BulletIcon } from '@components/atoms/Icon';
import { MainBtn } from '@components/atoms/Button';
import { JoinMembershipContainer } from '@components/atoms/Container';
import { FormInput } from '@components/atoms/Input';
import { BulletBoldSpan, MainSpan } from '@components/atoms/Span';
import { MainForm } from '@components/atoms/Form';
import { errorToast } from '@components/atoms/toast';
import { loginApi } from '@api/AuthApi';

type LoadingProps = {
  setLoading: (loading: boolean) => void;
};

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

    loginApi({ email, password })
      .then(() => {
        navigate('/main');
      })
      .catch(() => {
        errorToast('로그인 실패. 이메일과 비밀번호를 확인해주세요.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const LoginHandle = () => {
    navigate('/signup');
  };

  return (
    <ColumnContainer>
      <BulletIcon />
      <BulletBoldSpan>Bullet Box</BulletBoldSpan>
      <MainForm>
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

        <JoinMembershipContainer>
          <span>아직 회원이 아니신가요?</span>
          <button
            type="button"
            onClick={() => {
              LoginHandle();
            }}
          >
            회원가입
          </button>
        </JoinMembershipContainer>
      </MainForm>
      <EmptyContainer />
    </ColumnContainer>
  );
};

export default Login;
