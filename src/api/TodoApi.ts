import React from 'react';
import { User } from 'firebase/auth';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { NavigateFunction } from 'react-router-dom';
import { successToast } from '@components/atoms/toast';

export type Todo = {
  user: User;
  id?: string;
  todo?: string;
  todoId?: string;
  navigate?: NavigateFunction;
};

type TodoData = {
  user: User;
  setTodos?: React.Dispatch<React.SetStateAction<Todo[]>>;
  setLoading?: (loading: boolean) => void;
};

export const addTodoApi = async ({ user, todo, navigate }: Todo) => {
  try {
    const db = getDatabase();
    const todoRef = ref(db, `users/${user.uid}/todos`);
    const newTodoRef = push(todoRef);

    await set(newTodoRef, { todo: todo });
    navigate('/main');
    successToast('할일이 추가 되었습니다.');
  } catch (error) {
    console.log(error);
  }
};

export const getTodoApi = ({ user, setTodos, setLoading }: TodoData) => {
  setLoading(true);

  const db = getDatabase();
  const todoRef = ref(db, `users/${user.uid}/todos`);

  onValue(
    todoRef,
    (snapshot) => {
      const data = (snapshot.val() as Record<string, Todo>) || null;

      if (data) {
        const todosArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setTodos(todosArray);
      }

      setLoading(false);
    },
    (error) => {
      console.log(error);
    },
  );
};

export const deleteTodoApi = async ({ user, todoId }: Todo) => {
  try {
    const db = getDatabase();
    const todoRef = ref(db, `users/${user.uid}/todos/${todoId}`);
    await set(todoRef, null);

    successToast('할일이 삭제 되었습니다.');
  } catch (error) {
    console.log(error);
  }
};

export const updateTodoApi = async ({ user, todo, todoId, navigate }: Todo) => {
  try {
    const db = getDatabase();
    const todoRef = ref(db, `users/${user.uid}/todos/${todoId}`);

    await set(todoRef, { todo: todo });
    navigate('/main');
    successToast('할일이 수정 되었습니다.');
  } catch (error) {
    console.log(error);
  }
};
