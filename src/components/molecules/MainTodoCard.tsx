import React from 'react';
import { deleteTodoApi } from '@api/TodoApi';
import { EmailCheckBtn } from '@components/atoms/Button';
import {
  BulletContainer,
  CategoryContainer,
  TodoCardContainer,
  TodoContentContainer,
} from '@components/atoms/Container';
import { TimeContainer, TodoSpan } from '@components/atoms/Span';

import { usePageLocation } from '@hooks/usePageLocation';
import { useRequest } from '@hooks/useRequest';

type TodoInfo = {
  todoId: string;
  todoContent?: string;
  time?: string;
  color?: string;
  setSearchResults?: any;
  setReload?: any;
};

const MainTodoCard = ({
  todoId,
  todoContent,
  time,
  color,
  setSearchResults,
  setReload,
}: TodoInfo) => {
  const { goToDailyLogUpdate } = usePageLocation();
  const { request: deleteTodo } = useRequest({
    apiFunc: deleteTodoApi,
    reduxKey: 'todos',
    successMessage: '삭제 성공',
    errorMessage: '삭제 실패',
  });

  const handleTodoDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const todoId = e.currentTarget.value;

    await deleteTodo({ todoId });
    setReload((prev) => !prev);
    setSearchResults((prevResults) => {
      return prevResults.filter(
        ([existingTodoId]) => existingTodoId !== todoId,
      );
    });
  };

  return (
    <TodoCardContainer $todoContent={todoContent}>
      <CategoryContainer $backgroundColor={color}></CategoryContainer>
      <BulletContainer></BulletContainer>
      <TodoContentContainer>
        <TodoSpan>{todoContent}</TodoSpan>
        {time === null ? null : <TimeContainer>{time}</TimeContainer>}
      </TodoContentContainer>
      <EmailCheckBtn
        onClick={() => {
          goToDailyLogUpdate({ todoId, todoContent });
        }}
      >
        수정
      </EmailCheckBtn>
      <EmailCheckBtn
        value={todoId}
        onClick={(e) => {
          void handleTodoDelete(e);
        }}
      >
        삭제
      </EmailCheckBtn>
    </TodoCardContainer>
  );
};

export default MainTodoCard;
