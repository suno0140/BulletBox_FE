import { User } from '@firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';

type SetUserData = {
  user: User;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  setNickname?: React.Dispatch<React.SetStateAction<string>>;
};

type UserData = {
  email: string;
  nickname: string;
};

export const getUserInfoApi = ({
  user,
  setEmail,
  setNickname,
}: SetUserData) => {
  if (!user) return;

  const db = getDatabase();
  const userRef = ref(db, 'users/' + user.uid);

  onValue(userRef, (snapshot) => {
    const data = (snapshot.val() as UserData) || null;
    if (data) {
      setEmail(data.email);
      setNickname(data.nickname);
    }
  });
};
