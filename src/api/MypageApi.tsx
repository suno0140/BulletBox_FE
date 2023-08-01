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

export const MypageApi = ({ setEmail, setNickname }: SetUserData) => {
  try {
    onAuthStateChanged(FireAuth, (user) => {
      if (user) {
        const db = getDatabase();
        const userRef = ref(db, 'users/' + user.uid);

        onValue(userRef, (snapshot) => {
          const data: UserData = snapshot.val() as UserData;
          setEmail(data.email);
          setNickname(data.nickname);
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
