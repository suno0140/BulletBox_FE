import { FireAuth } from '@core/Firebase';
import { getDatabase, push, ref, set } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';

type todoData = {
  todo: string;
};

export const addTodoApi = ({ todo }: todoData) => {
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

// type TodosData = {
//   setTodos: React.Dispatch<React.SetStateAction<string[]>>;
// };

// type TodoData = {
//   todos: string[];
// };

// export const GetTodoApi = ({ setTodos }: TodosData) => {
//   return new Promise<void>((resolve, reject) => {
//     onAuthStateChanged(FireAuth, (user) => {
//       if (user) {
//         const db = getDatabase();
//         const todosRef = ref(db, `users/${user.uid}/todos`);

//         onValue(
//           todosRef,
//           (snapshot) => {
//             const todosData: TodoData = snapshot.val();
//             if (todosData && Array.isArray(todosData.todos)) {
//               setTodos(todosData.todos);
//             } else {
//               setTodos([]); // 데이터가 없는 경우 초기화
//             }
//             resolve();
//           },
//           (error) => {
//             reject(error);
//           },
//         );
//       } else {
//         reject('사용자가 로그인하지 않았습니다.');
//       }
//     });
//   });
// };
