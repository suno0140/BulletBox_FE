import { MainCalendar } from '@components/Calendar';
import { ColumnBox, Flexbox } from '@components/Div';
import { FireAuth } from '@core/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TodoCard, TodoTitle } from '@components/todos/TodoDiv';
import { LoadingProps } from '@components/types';

const Main = ({ setLoading }: LoadingProps) => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    id: string;
    todo: string;
  };

  useEffect(() => {
    setLoading(true);

    onAuthStateChanged(FireAuth, (user) => {
      if (user) {
        const db = getDatabase();
        const todoRef = ref(db, `users/${user.uid}/todos`);

        onValue(todoRef, (snapshot) => {
          const data = snapshot.val() as Record<string, Todo>;
          const todosArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setTodos(todosArray);
          console.log(todosArray);
          setLoading(false);
        });
      }
    });
  }, []);

  return (
    <>
      <MainCalendar />
      <Flexbox>
        <ColumnBox>
          {todos.map((todo) => (
            <TodoCard key={todo.id}>{todo.todo}</TodoCard>
          ))}
          <TodoTitle
            onClick={() => {
              navigate('/dailyAdd');
            }}
          >
            할일 추가 하기
          </TodoTitle>
        </ColumnBox>
      </Flexbox>
    </>
  );
};

export default Main;
