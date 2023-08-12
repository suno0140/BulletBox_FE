import { User } from '@firebase/auth';
import { get, getDatabase, ref } from 'firebase/database';

type SetUserData = {
  user: User;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  setNickname?: React.Dispatch<React.SetStateAction<string>>;
  setLoading?: (loading: boolean) => void;
};

type UserData = {
  email: string;
  nickname: string;
};

export const getUserInfo = async ({
  user,
  setEmail,
  setNickname,
  setLoading,
}: SetUserData) => {
  setLoading(true);
  try {
    const db = getDatabase();
    const userRef = ref(db, 'users/' + user.uid);
    const snapshot = await get(userRef);
    const data = (snapshot.val() as UserData) || null;
    if (data) {
      setEmail(data.email);
      setNickname(data.nickname);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
