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

type LoadingProps = {
  setLoading: (loading: boolean) => void;
};

const Main = ({ setLoading }: LoadingProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const navigate = useNavigate();
  const { user, userDataLoading } = useContext(AuthContext);

  useEffect(() => {
    if (userDataLoading) {
      return;
    } else {
      void getTodoApi({ user, setTodos, setLoading });
    }
  }, [user, userDataLoading]);

  return (
    <>
      <MainCalendar />
      <MainPageContaiver>
        <DateContainer>2023/8/11(금)</DateContainer>
        <MainTodoContainer>
          {todos.map((todo) => (
            <MainTodoCard
              key={todo.id}
              todoId={todo.id}
              todoContent={todo.todo}
              time={null}
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
