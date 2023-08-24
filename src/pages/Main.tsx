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
import { useRequest } from '@hooks/useRequest';

const Main = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const currentDate = useCurrentDate();

  const { data, request } = useRequest({
    apiFunc: getTodoApi,
    reduxKey: 'GET_TODO',
  });

  const navigate = useNavigate();
  const { user, userDataLoading } = useContext(AuthContext);

  useEffect(() => {
    if (userDataLoading) {
      return;
    } else {
      request({ user, setTodos });
    }
  }, [data, user, userDataLoading]);

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
              color={todo.color}
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
