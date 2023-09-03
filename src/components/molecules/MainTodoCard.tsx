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
import { errorToast, successToast } from '@components/atoms/toast';
import { usePageLocation } from '@hooks/usePageLocation';

type TodoInfo = {
  todoId: string;
  todoContent?: string;
  time?: string;
  color?: string;
  setReload?: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainTodoCard = ({
  todoId,
  todoContent,
  time,
  color,
  setReload,
}: TodoInfo) => {
  const { goToDailyLogUpdate } = usePageLocation();

  const handleTodoDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const todoId = e.currentTarget.value;

    try {
      await deleteTodoApi({ todoId });
      setReload((prev) => !prev);

      successToast('삭제 성공');
    } catch (error) {
      errorToast('삭제 실패');
      console.log(error);
    }
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
