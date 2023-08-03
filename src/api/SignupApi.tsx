// authApi.ts 파일
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { FireAuth } from '@core/Firebase';

type UserInfo = {
  email: string;
  password: string;
  nickName: string;
};

export const SignupApi = async ({ email, password, nickName }: UserInfo) => {
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
