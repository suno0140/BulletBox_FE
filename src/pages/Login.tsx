import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ColumnContainer, EmptyContainer } from '@components/atoms/Container';
import { BulletIcon } from '@components/atoms/Icon';
import { MainBtn } from '@components/atoms/Button';
import { JoinMembershipContainer } from '@components/atoms/Container';
import { FormInput } from '@components/atoms/Input';
import { BulletBoldSpan, MainSpan } from '@components/atoms/Span';
import { MainForm } from '@components/atoms/Form';
import { loginApi } from '@api/AuthApi';
import { errorToast, successToast } from '@components/atoms/toast';
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from '@redux/modules/loading';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailCheck = e.currentTarget.value;
    setEmail(emailCheck);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordCheck = e.currentTarget.value;
    setPassword(passwordCheck);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(startLoading());

    try {
      await loginApi({ email, password });
      successToast('로그인 성공');
      navigate('/main');
    } catch (error) {
      console.log(error);
      errorToast('로그인 실패');
    } finally {
      dispatch(stopLoading());
    }
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
            void handleLogin(e);
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
