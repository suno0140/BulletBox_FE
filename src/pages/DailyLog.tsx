import React from 'react';
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

const DailyLog = () => {
  const [reload, setReload] = React.useState(false);

  const currentDate = useCurrentDate();

  const { goToDailyLogAdd } = usePageLocation();

  return (
    <>
      <MainPageContaiver>
        <DateContainer>{currentDate}</DateContainer>
        <MainTodoContainer>
          {/* {todos.map((todo) => (
            <MainTodoCard
              key={todo.id}
              todoId={todo.id}
              todoContent={todo.todo}
              time={null}
              color={todo.color}
            />
          ))} */}
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
