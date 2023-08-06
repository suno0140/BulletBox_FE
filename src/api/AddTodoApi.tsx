import { FireAuth } from '@core/Firebase';
import { getDatabase, push, ref, set } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';

type todoData = {
  todo: string;
};

export const AddTodoApi = ({ todo }: todoData) => {
  return new Promise<void>((resolve, reject) => {
    onAuthStateChanged(FireAuth, (user) => {
      if (user) {
        const db = getDatabase();
        const todosRef = ref(db, `users/${user.uid}/todos`);
        const newTodoRef = push(todosRef);

        set(newTodoRef, { todo: todo })
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject('로그인이 필요한 서비스입니다.');
      }
    });
  });
};
