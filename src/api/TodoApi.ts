import axios from 'axios';
import { User } from 'firebase/auth';
import { getDatabase, push, ref, set } from 'firebase/database';

export type Todo = {
  user: User;
  id?: string;
  todo?: string;
  todoId?: string;
  color?: string;
};

export const addTodoApi = async ({ user, todo, color }: Todo) => {
  try {
    const db = getDatabase();
    const todoRef = ref(db, `users/${user.uid}/todos`);
    const newTodoRef = push(todoRef);

    await set(newTodoRef, {
      todo: todo,
      todoId: newTodoRef.key,
      color: color,
    });

    return { success: true };
  } catch (error) {
    console.log(error);
  }
};

export const getTodoApi = async () => {
  const token = JSON.parse(localStorage.getItem('token') || '') as string;
  const uid = JSON.parse(localStorage.getItem('uid') || '') as string;

  if (!token || !uid) {
    return null;
  }

  const dbURL = `https://${process.env.REACT_APP_FIREBASE_DATABASE_URL}/users/${uid}/todos.json?auth=${token}`;

  try {
    const response = await axios.get(dbURL);
    if (response.status === 200 && response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteTodoApi = async ({ user, todoId }: Todo) => {
  try {
    const db = getDatabase();
    const todoRef = ref(db, `users/${user.uid}/todos/${todoId}`);
    await set(todoRef, null);
    return { success: true };
  } catch (error) {
    console.log(error);
  }
};

export const updateTodoApi = async ({ user, todo, todoId }: Todo) => {
  try {
    const db = getDatabase();
    const todoRef = ref(db, `users/${user.uid}/todos/${todoId}`);

    await set(todoRef, { todo: todo });
    return { success: true };
  } catch (error) {
    console.log(error);
  }
};
