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

type TodoInfo = {
  todoId: string;
  todoContent: string;
  time: string;
};

const MainTodoCard = ({ todoId, todoContent, time }: TodoInfo) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleTodoUpdate = () => {
    navigate('/dailyUpdate', { state: { todoId, todoContent } });
  };
  const handleTodoDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const todoId = e.currentTarget.value;
    void deleteTodoApi({ user, todoId });
  };

  return (
    <TodoCardContainer $todoContent={todoContent}>
      <CategoryContainer></CategoryContainer>
      <BulletContainer></BulletContainer>
      <TodoContentContainer>
        <TodoSpan>{todoContent}</TodoSpan>
        {time === null ? null : <TimeContainer>{time}</TimeContainer>}
      </TodoContentContainer>
      <EmailCheckBtn onClick={handleTodoUpdate}>수정</EmailCheckBtn>
      <EmailCheckBtn
        value={todoId}
        onClick={(e) => {
          handleTodoDelete(e);
        }}
      >
        삭제
      </EmailCheckBtn>
    </TodoCardContainer>
  );
};

export default MainTodoCard;
