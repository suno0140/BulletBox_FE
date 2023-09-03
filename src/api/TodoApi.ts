import { DB_URL } from '@core/api';
import { tokenId, uid } from '@core/localStorage';
import axios from 'axios';
import { User } from 'firebase/auth';

export type Todo = {
  user?: User;
  id?: string;
  todo?: string;
  todoId?: string;
  color?: string;
};

export const addTodoApi = async ({ todo, color }) => {
  const dbURL = `https://${DB_URL}/users/${uid}/todos.json`;

  await axios.post(dbURL, {
    todo,
    color,
  });
};

export const getTodoApi = async () => {
  const dbURL = `https://${DB_URL}/users/${uid}/todos.json?auth=${tokenId}`;

  const response = await axios.get(dbURL);
  if (response.status === 200 && response.data) {
    return response.data;
  }
};

export const deleteTodoApi = async ({ todoId }: Todo) => {
  const dbURL = `https://${DB_URL}/users/${uid}/todos/${todoId}.json?auth=${tokenId}`;

  await axios.delete(dbURL);
};

export const updateTodoApi = async ({ todo, todoId, color }: Todo) => {
  const dbURL = `https://${DB_URL}/users/${uid}/todos/${todoId}.json?auth=${tokenId}`;

  await axios.put(dbURL, {
    todo,
    color,
  });
};
