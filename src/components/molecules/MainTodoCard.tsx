import React, { useContext, useState } from 'react';
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
import useStatusCheck from '@hooks/useStatusCheck';

type TodoInfo = {
  todoId: string;
  todoContent: string;
  time: string;
  setLoading: (loading: boolean) => void;
};

const MainTodoCard = ({ todoId, todoContent, time, setLoading }: TodoInfo) => {
  const [todoResponse, setTodoResponse] = useState<{
    success?: boolean;
  }>({});

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleTodoUpdate = () => {
    navigate('/dailyUpdate', { state: { todoId, todoContent } });
  };
  const handleTodoDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    const todoId = e.currentTarget.value;

    try {
      await deleteTodoApi({ user, todoId });
      setTodoResponse({ success: true });
    } catch (error) {
      console.log(error);
      setTodoResponse({ success: false });
    } finally {
      setLoading(false);
    }
  };

  useStatusCheck({
    status: todoResponse,
    successmessage: '할일 삭제 성공',
    errormessage: '할일 삭제 실패',
  });

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
          void handleTodoDelete(e);
        }}
      >
        삭제
      </EmailCheckBtn>
    </TodoCardContainer>
  );
};

export default MainTodoCard;
