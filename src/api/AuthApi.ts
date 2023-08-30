import { signOut } from 'firebase/auth';
import { FireAuth } from '@core/Firebase';
import axios from 'axios';

type UserInfo = {
  email: string;
  password: string;
  nickName?: string;
};

type AuthResponseData = {
  localId: string;
};

export const loginApi = async ({ email, password }: UserInfo) => {
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_APIKEY}`;

  try {
    const response = await axios.post(
      URL,
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const result = response.data;
    localStorage.setItem('token', JSON.stringify(result.idToken));
    localStorage.setItem('uid', JSON.stringify(result.localId));

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logoutApi = async () => {
  return await signOut(FireAuth);
};

export const signupApi = async ({ email, password, nickName }: UserInfo) => {
  const authURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_APIKEY}`;

  try {
    const authResponse = await axios.post<AuthResponseData>(
      authURL,
      {
        email,
        password,
        returnSecureToken: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const userId = authResponse.data.localId;
    console.log('User ID:', userId);

    const dbURL = `https://${process.env.REACT_APP_FIREBASE_DATABASE_URL}/users/${userId}.json`;
    console.log('Database URL:', dbURL);

    const result = await axios.put(
      dbURL,
      {
        email: email,
        nickname: nickName,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    console.log('Database result:', result);
    return result;
  } catch (error) {
    console.log('An error occurred:', error);
    throw error;
  }
};
