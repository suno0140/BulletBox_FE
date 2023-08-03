import { FireAuth } from '@core/Firebase';
import { signOut } from 'firebase/auth';

export const useLogout = async () => {
  await signOut(FireAuth);
};
