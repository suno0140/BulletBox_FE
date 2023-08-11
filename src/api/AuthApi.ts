import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { FireAuth } from '@core/Firebase';
import { getDatabase, ref, set } from 'firebase/database';

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
    throw error;
  }
};

export const logoutApi = async () => {
  await signOut(FireAuth);
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
  } catch (e) {
    console.log(e);
  }
};