import { FireAuth } from '@core/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';

type SetUserData = {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
};

type UserData = {
  email: string;
  nickname: string;
};

export const getUserInfo = ({ setEmail, setNickname }: SetUserData) => {
  return new Promise<void>((resolve, reject) => {
    onAuthStateChanged(FireAuth, (user) => {
      if (user) {
        const db = getDatabase();
        const userRef = ref(db, 'users/' + user.uid);

        onValue(
          userRef,
          (snapshot) => {
            const data: UserData = snapshot.val() as UserData;
            setEmail(data.email);
            setNickname(data.nickname);
            resolve();
          },
          (error) => {
            reject(error);
          },
        );
      } else {
        reject('사용자가 로그인하지 않았습니다.');
      }
    });
  });
};
