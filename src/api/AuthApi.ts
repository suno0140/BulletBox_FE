import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { FireAuth } from '@core/Firebase';
import { getDatabase, ref, set } from 'firebase/database';
import { NavigateFunction } from 'react-router-dom';

type UserInfo = {
  email: string;
  password: string;
  nickName?: string;
};

export const loginApi = async ({ email, password }: UserInfo) => {
  try {
    const result = await signInWithEmailAndPassword(FireAuth, email, password);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const logoutApi = async (navigate: NavigateFunction) => {
  await signOut(FireAuth);
  navigate('/login');
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
  } catch (error) {
    console.log(error);
  }
};
