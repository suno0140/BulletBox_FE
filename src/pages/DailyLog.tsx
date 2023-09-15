import React, { useEffect } from 'react';
import {
  DateContainer,
  FlexContainer,
  MainPageContaiver,
  MainTodoContainer,
} from '@components/atoms/Container';
import { AddCategoryIcon, CategoryAddBtn } from '@components/atoms/Icon';
import MainTodoCard from '@components/molecules/MainTodoCard';
import useCurrentDate from '@hooks/useCurrentData';
import { usePageLocation } from '@hooks/usePageLocation';
import { useRequest } from '@hooks/useRequest';
import { getTodoApi } from '@api/TodoApi';

const DailyLog = () => {
  const [reload, setReload] = React.useState(false);
  const { data: todosData, request: getTodos } = useRequest({
    apiFunc: getTodoApi,
    reduxKey: 'todos',
  });

  const currentDate = useCurrentDate();

  const { goToDailyLogAdd } = usePageLocation();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
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

export default DailyLog;
