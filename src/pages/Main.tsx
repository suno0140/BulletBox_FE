import React, { useEffect, useState } from 'react';
import { MainCalendar } from '@components/molecules/Calendar';

import MainTodoCard from '@components/molecules/MainTodoCard';
import {
  DateContainer,
  FlexContainer,
  MainPageContaiver,
  MainTodoContainer,
} from '@components/atoms/Container';
import useCurrentDate from '@hooks/useCurrentData';

import { AddCategoryIcon, CategoryAddBtn } from '@components/atoms/Icon';
import { usePageLocation } from '@hooks/usePageLocation';
import { useRequest } from '@hooks/useRequest';
import { getTodoApi } from '@api/TodoApi';

const Main = () => {
  const [reloadTodos, setReloadTodos] = useState(false);
  const { data: todosData, request: getTodos } = useRequest({
    apiFunc: getTodoApi,
    reduxKey: 'todos',
  });

  const currentDate = useCurrentDate();

  useEffect(() => {
    getTodos();
  }, [reloadTodos]);

  const { goToDailyLogAdd } = usePageLocation();

  return (
    <>
      <MainCalendar />
      <MainPageContaiver>
        <DateContainer>{currentDate}</DateContainer>
        <MainTodoContainer>
          {todosData &&
            Object.entries(todosData).map(
              ([todoId, todoItem]: [string, any]) => (
                <MainTodoCard
                  key={todoId}
                  todoId={todoId}
                  todoContent={todoItem.todo}
                  time={null}
                  color={todoItem.color}
                  setReloadTodos={setReloadTodos}
                />
              ),
            )}
        </MainTodoContainer>

        <FlexContainer>
          <CategoryAddBtn
            onClick={() => {
              goToDailyLogAdd();
            }}
          >
            <AddCategoryIcon />
          </CategoryAddBtn>
        </FlexContainer>
      </MainPageContaiver>
    </>
  );
};

export default Main;
