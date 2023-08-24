import { User } from '@firebase/auth';
import { get, getDatabase, ref } from 'firebase/database';

type SetUserData = {
  user: User;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  setNickname?: React.Dispatch<React.SetStateAction<string>>;
};

type UserData = {
  email: string;
  nickname: string;
};

export const getUserInfoApi = async ({
  user,
  setEmail,
  setNickname,
}: SetUserData) => {
  if (!user) return;

  const db = getDatabase();
  const userRef = ref(db, 'users/' + user.uid);

  try {
    const snapshot = await get(userRef);
    const data = (snapshot.val() as UserData) || null;
    if (data) {
      setEmail(data.email);
      setNickname(data.nickname);
    }
    return { success: true };
  } catch (error) {
    console.log(error);
  }
};
