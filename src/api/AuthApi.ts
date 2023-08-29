import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { FireAuth } from '@core/Firebase';
import { getDatabase, ref, set } from 'firebase/database';
import axios from 'axios';

type UserInfo = {
  email: string;
  password: string;
  nickName?: string;
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
    localStorage.setItem('auth', JSON.stringify(result));
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
  try {
    const result = await createUserWithEmailAndPassword(
      FireAuth,
      email,
      password,
    );
    const userId = result.user.uid;
    const db = getDatabase();
    const userRef = ref(db, 'users/' + userId);
    await set(userRef, {
      email: email,
      nickname: nickName,
    });

    return { success: true };
  } catch (error) {
    console.log(error);
  }
};
