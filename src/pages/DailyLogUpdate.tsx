import React, { useContext, useEffect, useState } from 'react';
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
import { useRequest } from '@hooks/useRequest';

const DailyLogUpdate = () => {
  const location = useLocation();
  const initialState = location.state as {
    todoId: string;
    todoContent: string;
  };

  const todoId = initialState?.todoId;
  const todoContent = initialState?.todoContent;

  const [todo, setTodo] = useState(todoContent || '');

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { data, request } = useRequest({
    apiFunc: updateTodoApi,
    reduxKey: 'TODO_UPDATE',
    successMessage: '할일 수정 성공',
    errorMessage: '할일 수정 실패',
  });

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoText = e.currentTarget.value;
    setTodo(todoText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    request({ user, todo, todoId });
  };

  const handleCancle = () => {
    navigate('/main');
  };

  useEffect(() => {
    if (data) {
      navigate('/main');
    }
  }, [data]);

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
