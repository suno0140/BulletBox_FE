import React, { useEffect, useState } from 'react';
import { MainCalendar } from '@components/molecules/Calendar';

import MainTodoCard from '@components/molecules/MainTodoCard';
import {
  ColumnContainer,
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
  const [reload, setReload] = useState(false);
  const { data: todosData, request: getTodos } = useRequest({
    apiFunc: getTodoApi,
    reduxKey: 'todos',
  });

  const currentDate = useCurrentDate();

  useEffect(() => {
    getTodos();
  }, [reload]);

  const { goToDailyLogAdd } = usePageLocation();

  return (
    <>
      <MainCalendar />
      <MainPageContaiver>
        <DateContainer>{currentDate}</DateContainer>
        <MainTodoContainer>
          {todosData ? (
            Object.entries(todosData).map(
              ([todoId, todoItem]: [string, any]) => (
                <MainTodoCard
                  key={todoId}
                  todoId={todoId}
                  todoContent={todoItem.todo}
                  time={null}
                  color={todoItem.color}
                  setReload={setReload}
                />
              ),
            )
          ) : (
            <p>할일 추가</p>
          )}
        </MainTodoContainer>

        <ColumnContainer>
          <CategoryAddBtn
            onClick={() => {
              goToDailyLogAdd();
            }}
          >
            <AddCategoryIcon />
          </CategoryAddBtn>
        </ColumnContainer>
      </MainPageContaiver>
    </>
  );
};

export default Main;
