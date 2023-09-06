import { signOut } from 'firebase/auth';
import { FireAuth } from '@core/Firebase';
import { API_KEY, URL, api } from '@core/api';

type UserInfo = {
  email: string;
  password: string;
  nickName?: string;
};

type AuthResponseData = {
  idToken: string;
  localId: string;
};

export const loginApi = async ({ email, password }: UserInfo) => {
  const response = await api.post(URL, {
    email,
    password,
  });

  return response.data;
};

export const logoutApi = async () => {
  await signOut(FireAuth);
};

export const signupApi = async ({ email, password, nickName }: UserInfo) => {
  const authURL = `accounts:signUp?key=${API_KEY}`;
  const updateURL = `accounts:update?key=${API_KEY}`;

  const authResponse = await api.post<AuthResponseData>(authURL, {
    email,
    password,
    returnSecureToken: true,
  });

  const idToken = authResponse.data.idToken;

  await api.post(updateURL, {
    idToken,
    displayName: nickName,
  });
};
