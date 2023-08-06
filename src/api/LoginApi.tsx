import { signInWithEmailAndPassword } from 'firebase/auth';
import { FireAuth } from '@core/Firebase';

type UserInfo = {
  email: string;
  password: string;
};

export const LoginApi = async ({ email, password }: UserInfo) => {
  try {
    await signInWithEmailAndPassword(FireAuth, email, password);
  } catch (error) {
    console.log(error);
  }
};
