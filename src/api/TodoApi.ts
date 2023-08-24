import React from 'react';
import { User } from 'firebase/auth';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';

export type Todo = {
  user: User;
  id?: string;
  todo?: string;
  todoId?: string;
};

type TodoData = {
  user: User;
  setTodos?: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const addTodoApi = async ({ user, todo }: Todo) => {
  try {
    const db = getDatabase();
    const todoRef = ref(db, `users/${user.uid}/todos`);
    const newTodoRef = push(todoRef);

    await set(newTodoRef, { todo: todo, todoId: newTodoRef.key });
  } catch (error) {
    console.log(error);
  }
};

export const getTodoApi = ({ user, setTodos }: TodoData) => {
  if (!user) return;

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
      } else {
        setTodos([]);
      }
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
  } catch (error) {
    console.log(error);
  }
};

export const updateTodoApi = async ({ user, todo, todoId }: Todo) => {
  try {
    const db = getDatabase();
    const todoRef = ref(db, `users/${user.uid}/todos/${todoId}`);

    await set(todoRef, { todo: todo });
  } catch (error) {
    console.log(error);
  }
};
