import React, { useContext, useEffect } from 'react';
import { MainCalendar } from '@components/molecules/Calendar';
import { useNavigate } from 'react-router-dom';
import { getTodoApi } from '@api/TodoApi';

import MainTodoCard from '@components/molecules/MainTodoCard';
import {
  DateContainer,
  MainPageContaiver,
  MainTodoContainer,
  TodoAddContiner,
} from '@components/atoms/Container';
import useCurrentDate from '@hooks/useCurrentData';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '@redux/modules/todos';
import { AuthContext } from '@core/AuthContext';
import { RootState } from '@redux/config/configStore';

const Main = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const currentDate = useCurrentDate();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodo = async () => {
      console.log('fetch todo');
      const data = await getTodoApi();
      console.log(data);
      if (data) {
        dispatch(getTodo(data));
      }
    };

    void fetchTodo();
  }, [user, dispatch]);

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
