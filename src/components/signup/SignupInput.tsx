import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from '@firebase/auth';
import { FireAuth } from '@core/Firebase';
import { getDatabase, ref, set } from 'firebase/database';

const SignUpInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickName, setNickName] = useState('');

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    const emailCheck = e.currentTarget.value;
    setEmail(emailCheck);

    if (!emailRegEx.test(emailCheck)) {
      setEmailMessage('* 올바른 이메일 형식이 아닙니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('* 중복체크를 해주세요.');
      setIsEmail(false);
    }
  };

  const handleEmailCheck = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    fetchSignInMethodsForEmail(FireAuth, email)
      .then((e) => {
        if (e.length === 0) {
          alert('사용가능한 이메일입니다.');
          setEmailMessage('* 사용가능한 이메일입니다.');
          setIsEmail(true);
        } else {
          alert('이미 사용중인 이메일입니다.');
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nickNameCheck = e.currentTarget.value;

    setNickName(nickNameCheck);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
    const passwordCheck = e.currentTarget.value;

    setPassword(passwordCheck);

    if (!passwordRegEx.test(passwordCheck)) {
      setPasswordMessage('* 8자리이상 20자리이하로 입력해주세요.');
      setIsPassword(false);
    } else {
      setPasswordMessage('* 사용 가능한 비밀번호입니다.');
      setIsPassword(true);
    }
  };

  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordCheck = e.currentTarget.value;

    setPasswordConfirm(passwordCheck);

    if (password === passwordCheck) {
      setPasswordConfirmMessage('* 비밀번호가 일치합니다.');
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage('* 비밀번호가 일치하지 않습니다.');
      setIsPasswordConfirm(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createUserWithEmailAndPassword(FireAuth, email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        const db = getDatabase();

        const userRef = ref(db, 'users/' + userId);

        void set(userRef, {
          email: email,
          nickname: nickName,
        });

        alert('회원가입 성공');
        navigate('/login');
      })
      .catch((e) => {
        console.log(e);
        alert('회원가입 실패');
      });
  };

  const handleLoginPage = () => {
    navigate('/login');
  };
  return (
    <StForm>
      <StTitle>Sign up</StTitle>
      <EmailDiv>
        <StInput
          type="email"
          placeholder="이메일 주소를 입력하세요."
          value={email}
          onChange={handleEmail}
        ></StInput>
        <EmailCheckBtn onClick={handleEmailCheck}>중복체크</EmailCheckBtn>
      </EmailDiv>

      {email.length !== 0 && <AlarmSpan>{emailMessage}</AlarmSpan>}

      <StInput
        placeholder="닉네임을 입력하세요."
        type="text"
        value={nickName}
        onChange={handleNickName}
      ></StInput>

      <StInput
        placeholder="패스워드를 입력하세요."
        type="password"
        value={password}
        onChange={handlePassword}
      ></StInput>

      {password.length !== 0 && <AlarmSpan>{passwordMessage}</AlarmSpan>}

      <StInput
        placeholder="패스워드를 다시 한 번 입력하세요."
        type="password"
        value={passwordConfirm}
        onChange={handlePasswordConfirm}
      ></StInput>

      {passwordConfirm.length !== 0 && (
        <AlarmSpan>{passwordConfirmMessage}</AlarmSpan>
      )}

      <StButtonBox>
        <StSignupBtn
          type="submit"
          onClick={handleSubmit}
          disabled={!(isEmail && isPassword && isPasswordConfirm)}
        >
          회원가입
        </StSignupBtn>
      </StButtonBox>
      <CancelBtn
        type="button"
        onClick={() => {
          handleLoginPage();
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
  font-weight: bold;
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

const AlarmSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 10px;
  margin: 6px;
  padding-left: 25px;
  font-size: 12px;
  font-weight: bold;
`;

const EmailCheckBtn = styled.button`
  width: 25%;
  font-size: 11px;
  margin-top: 10px;
  padding: 0;
  color: var(--color-main);
  border: 0;
  outline: none;
  background-color: transparent;
`;
