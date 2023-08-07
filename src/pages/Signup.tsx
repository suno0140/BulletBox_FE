import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSignInMethodsForEmail } from '@firebase/auth';
import { FireAuth } from '@core/Firebase';

import {
  emailvalidation,
  nickNameValidation,
  passwordConfirmValidation,
  passwordValidation,
} from 'utils/validation';

import { signupApi } from '@api/AuthApi';
import { StForm } from '@components/Form';
import { AlarmSpan, BulletBold, MainSpan } from '@components/Span';
import { FormEmailInput, FormInput } from '@components/Input';
import { EmailCheckBtn, GoBackBtn, MainBtn } from '@components/Button';
import { BulletLogo } from '@components/Logo';
import { ColumnBox, EmailFormDiv, EmptyBox } from '@components/Div';

import { Toaster } from 'react-hot-toast';
import { LoadingProps } from '@components/types';
import { errorToast, successToast } from '@components/atoms/toast';

const Signup = ({ setLoading }: LoadingProps) => {
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [emailMessage, setEmailMessage] = useState('');
  const [nickNameMessage, setNickNameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  const [isEmail, setIsEmail] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailCheck = e.currentTarget.value;
    setEmail(emailCheck);

    emailvalidation({ emailCheck, setEmailMessage, setIsEmail });
  };

  const handleEmailCheck = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const methods = await fetchSignInMethodsForEmail(FireAuth, email);
      if (methods.length === 0) {
        successToast('사용가능한 이메일입니다.');
        setEmailMessage('* 사용가능한 이메일입니다.');
        setIsEmail(true);
      } else {
        errorToast('이미 사용중인 이메일입니다.');
      }
    } catch (e) {
      errorToast('사용 불가능한 이메일 입니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nickNameCheck = e.currentTarget.value;
    setNickName(nickNameCheck);

    nickNameValidation({
      nickNameCheck,
      setNickNameMessage,
      setIsNickName,
    });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordCheck = e.currentTarget.value;
    setPassword(passwordCheck);

    passwordValidation({
      passwordCheck,
      setPasswordMessage,
      setIsPassword,
    });
  };

  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordConfirm = e.currentTarget.value;
    setPasswordConfirm(passwordConfirm);

    passwordConfirmValidation({
      password,
      passwordConfirm,
      setPasswordConfirmMessage,
      setIsPasswordConfirm,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signupApi({ email, password, nickName });
      navigate('/login');
    } catch (e) {
      console.log(e);
      errorToast('회원가입 실패');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginPage = () => {
    navigate('/login');
  };
  return (
    <ColumnBox>
      <BulletLogo />
      <BulletBold>Bullet Box</BulletBold>

      <StForm>
        <MainSpan>Sign up</MainSpan>
        <EmailFormDiv>
          <FormEmailInput
            type="email"
            placeholder="이메일 주소를 입력하세요."
            value={email}
            onChange={handleEmail}
          ></FormEmailInput>
          <EmailCheckBtn
            onClick={(e) => {
              void handleEmailCheck(e);
            }}
          >
            중복체크
          </EmailCheckBtn>
        </EmailFormDiv>
        {email.length !== 0 && <AlarmSpan>{emailMessage}</AlarmSpan>}

        <FormInput
          placeholder="닉네임을 입력하세요."
          type="text"
          value={nickName}
          onChange={handleNickName}
        ></FormInput>

        {nickName.length !== 0 && <AlarmSpan>{nickNameMessage}</AlarmSpan>}

        <FormInput
          placeholder="패스워드를 입력하세요."
          type="password"
          value={password}
          onChange={handlePassword}
        ></FormInput>

        {password.length !== 0 && <AlarmSpan>{passwordMessage}</AlarmSpan>}

        <FormInput
          placeholder="패스워드를 다시 한 번 입력하세요."
          type="password"
          value={passwordConfirm}
          onChange={handlePasswordConfirm}
        ></FormInput>

        {passwordConfirm.length !== 0 && (
          <AlarmSpan>{passwordConfirmMessage}</AlarmSpan>
        )}

        <MainBtn
          type="submit"
          onClick={(e) => {
            void handleSubmit(e);
          }}
          disabled={!(isEmail && isNickName && isPassword && isPasswordConfirm)}
        >
          회원가입
        </MainBtn>

        <GoBackBtn
          type="button"
          onClick={() => {
            handleLoginPage();
          }}
        >
          로그인 페이지로 돌아가기
        </GoBackBtn>
      </StForm>
      <EmptyBox />
      <Toaster />
    </ColumnBox>
  );
};

export default Signup;
