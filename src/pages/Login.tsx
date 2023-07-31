import React, { useState } from 'react';

import { BulletBold, ContainerBox } from '@components/DivContainer';
import { BulletLogo } from '@components/Logo';
import { useNavigate } from 'react-router-dom';
import { MainBtn } from '@components/Button';
import { JoinMembership } from '@components/DivContainer';
import { FormInput } from '@components/Input';
import { MainTitle } from '@components/Span';
import { StForm } from '@components/Form';
import { LoginApi } from '@api/LoginApi';

const Login = () => {
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

    LoginApi({ email, password })
      .then(() => {
        alert('로그인 성공');
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
    <ContainerBox>
      <BulletLogo />
      <BulletBold>Bullet Box</BulletBold>
      <StForm>
        <MainTitle>Login</MainTitle>
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
    </ContainerBox>
  );
};

export default Login;
