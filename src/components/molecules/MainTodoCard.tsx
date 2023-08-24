import React, { useContext } from 'react';
import { AuthContext } from '@core/AuthContext';
import { useNavigate } from 'react-router-dom';
import { deleteTodoApi } from '@api/TodoApi';
import { EmailCheckBtn } from '@components/atoms/Button';
import {
  BulletContainer,
  CategoryContainer,
  TodoCardContainer,
  TodoContentContainer,
} from '@components/atoms/Container';
import { TimeContainer, TodoSpan } from '@components/atoms/Span';
import { useRequest } from '@hooks/useRequest';

type TodoInfo = {
  todoId: string;
  todoContent?: string;
  time?: string;
  color?: string;
};

const MainTodoCard = ({ todoId, todoContent, time, color }: TodoInfo) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { data, request } = useRequest({
    apiFunc: deleteTodoApi,
    reduxKey: 'TODO_DELETE',
    successMessage: '할일 삭제 성공',
    errorMessage: '할일 삭제 실패',
  });

  const handleTodoUpdate = () => {
    navigate('/dailyUpdate', { state: { todoId, todoContent } });
  };
  const handleTodoDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const todoId = e.currentTarget.value;

    request({ user, todoId });
  };

  return (
    <TodoCardContainer $todoContent={todoContent}>
      <CategoryContainer $backgroundColor={color}></CategoryContainer>
      <BulletContainer></BulletContainer>
      <TodoContentContainer>
        <TodoSpan>{todoContent}</TodoSpan>
        {time === null ? null : <TimeContainer>{time}</TimeContainer>}
      </TodoContentContainer>
      <EmailCheckBtn onClick={handleTodoUpdate}>수정</EmailCheckBtn>
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
