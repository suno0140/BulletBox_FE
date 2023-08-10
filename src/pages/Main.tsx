import { MainCalendar } from '@components/molecules/Calendar';
import { ColumnContainer, FlexContainer } from '@components/atoms/Container';
import { FireAuth } from '@core/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TodoCardContainer,
  TodoAddContainer,
} from '@components/atoms/Container';

type LoadingProps = {
  setLoading: (loading: boolean) => void;
};

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
          const data = (snapshot.val() as Record<string, Todo>) || null;
          if (data) {
            const todosArray = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            setTodos(todosArray);
            console.log(todosArray);
          }
        });
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      <MainCalendar />
      <FlexContainer>
        <ColumnContainer>
          {todos.map((todo) => (
            <TodoCardContainer key={todo.id}>{todo.todo}</TodoCardContainer>
          ))}
          <TodoAddContainer
            onClick={() => {
              navigate('/dailyAdd');
            }}
          >
            할일 추가 하기
          </TodoAddContainer>
        </ColumnContainer>
      </FlexContainer>
    </>
  );
};

export default Main;
