import React, { useContext, useState } from 'react';
import {
  AddInputButtonContainer,
  FlexContainer,
} from '@components/atoms/Container';
import { MainForm } from '@components/atoms/Form';
import { FormInput } from '@components/atoms/Input';
import { CancleBtn, SubmitBtn } from '@components/atoms/Button';
import { addTodoApi } from '@api/TodoApi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@core/AuthContext';

const DailyLogAdd = () => {
  const [todo, setTodo] = useState('');

  const navigate = useNavigate();
  const { user, userDataLoading } = useContext(AuthContext);

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoText = e.currentTarget.value;
    setTodo(todoText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userDataLoading) {
      return;
    } else {
      void addTodoApi({ user, todo, navigate });
    }
  };

  const handleCancle = () => {
    navigate('/main');
  };

  return (
    <FlexContainer>
      <MainForm>
        <FormInput
          placeholder="할일을 추가해보세요"
          value={todo}
          onChange={handleTodo}
        ></FormInput>
        <AddInputButtonContainer>
          <SubmitBtn
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            할일 추가
          </SubmitBtn>
          <CancleBtn type="button" onClick={handleCancle}>
            취소
          </CancleBtn>
        </AddInputButtonContainer>
      </MainForm>
    </FlexContainer>
  );
};

export default DailyLogAdd;
