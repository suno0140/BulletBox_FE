import React, { useContext, useState } from 'react';
import {
  AddInputButtonContainer,
  FlexContainer,
} from '@components/atoms/Container';
import { MainForm } from '@components/atoms/Form';
import { FormInput } from '@components/atoms/Input';
import { CancleBtn, SubmitBtn } from '@components/atoms/Button';
import { updateTodoApi } from '@api/TodoApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '@core/AuthContext';
import { LoadingProps } from '@core/Router';
import useStatusCheck from '@hooks/useStatusCheck';

const DailyLogUpdate = ({ setLoading }: LoadingProps) => {
  const location = useLocation();
  const initialState = location.state as {
    todoId: string;
    todoContent: string;
  };

  const todoId = initialState?.todoId;
  const todoContent = initialState?.todoContent;

  const [todo, setTodo] = useState(todoContent || '');
  const [todoResponse, setTodoResponse] = useState<{ success?: boolean }>({});

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoText = e.currentTarget.value;
    setTodo(todoText);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateTodoApi({ user, todo, todoId });
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
    successRoute: '/main',
    successmessage: '할일 수정 성공',
    errormessage: '할일 수정 실패',
  });

  const handleCancle = () => {
    navigate('/main');
  };

  return (
    <FlexContainer>
      <MainForm>
        <FormInput value={todo} onChange={handleTodo}></FormInput>
        <AddInputButtonContainer>
          <SubmitBtn
            type="submit"
            onClick={(e) => {
              void handleSubmit(e);
            }}
          >
            할일 수정
          </SubmitBtn>
          <CancleBtn type="button" onClick={handleCancle}>
            취소
          </CancleBtn>
        </AddInputButtonContainer>
      </MainForm>
    </FlexContainer>
  );
};

export default DailyLogUpdate;
