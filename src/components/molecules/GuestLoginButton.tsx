import React from 'react';
import { GuestLoginBtn } from '@components/atoms/Button';
import { useRequest } from '@hooks/useRequest';
import { signupApi } from '@api/AuthApi';

const GuestLoginButton = ({ request }) => {
  const generateRandomString = (length) => {
    const characters =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  const { request: signup } = useRequest({
    apiFunc: signupApi,
    reduxKey: 'auth',
  });

  const handleGuestLogin = async (e) => {
    e.preventDefault();
    try {
      const randomString = generateRandomString(4);
      const email = `guest${randomString}@example.com`;
      const password = `guestpassword${randomString}`;

      await signup({ email, password });
      await request({ email, password });
      console.log('성공');
    } catch (error) {
      console.error('게스트 로그인 실패:', error);
    }
  };

  return (
    <GuestLoginBtn onClick={(e) => void handleGuestLogin(e)}>
      게스트 로그인
    </GuestLoginBtn>
  );
};

export default GuestLoginButton;
