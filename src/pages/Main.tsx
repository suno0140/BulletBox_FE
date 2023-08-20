import React, { useContext, useEffect, useState } from 'react';
import { MainCalendar } from '@components/molecules/Calendar';
import { useNavigate } from 'react-router-dom';
import { getTodoApi, Todo } from '@api/TodoApi';
import { AuthContext } from '@core/AuthContext';
import MainTodoCard from '@components/molecules/MainTodoCard';
import {
  DateContainer,
  MainPageContaiver,
  MainTodoContainer,
  TodoAddContiner,
} from '@components/atoms/Container';
import useCurrentDate from '@hooks/useCurrentData';
import { LoadingProps } from '@core/Router';

const Main = ({ setLoading }: LoadingProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const currentDate = useCurrentDate();

  const navigate = useNavigate();
  const { user, userDataLoading } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    if (userDataLoading) {
      return;
    } else {
      void getTodoApi({ user, setTodos });
      setLoading(false);
    }
  }, [user, userDataLoading]);

  return (
    <>
      <MainCalendar />
      <MainPageContaiver>
        <DateContainer>{currentDate}</DateContainer>
        <MainTodoContainer>
          {todos.map((todo) => (
            <MainTodoCard
              key={todo.todoId}
              todoId={todo.todoId}
              todoContent={todo.todo}
              time={null}
              setLoading={setLoading}
            />
          ))}
        </MainTodoContainer>
        <div>
          <TodoAddContiner
            onClick={() => {
              navigate('/dailyAdd');
            }}
          >
            할일 추가 하기
          </TodoAddContiner>
        </div>
      </MainPageContaiver>
    </>
  );
};

export default Main;
