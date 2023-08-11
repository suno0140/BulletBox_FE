import React, { useState } from 'react';
import {
  AddInputButtonContainer,
  FlexContainer,
} from '@components/atoms/Container';
import { MainForm } from '@components/atoms/Form';
import { FormInput } from '@components/atoms/Input';
import { CancleBtn, SubmitBtn } from '@components/atoms/Button';
import { addTodoApi } from '@api/TodoApi';
import { useNavigate } from 'react-router-dom';

const DailyLogAdd = () => {
  const [todo, setTodo] = useState('');
  const navigete = useNavigate();
  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoText = e.currentTarget.value;
    setTodo(todoText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addTodoApi({ todo })
      .then(() => {
        navigete('/main');
      })
      .catch((error) => {
        console.log(error);
      });
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
            완료
          </SubmitBtn>
          <CancleBtn>취소</CancleBtn>
        </AddInputButtonContainer>
      </MainForm>
    </FlexContainer>
  );
};

export default DailyLogAdd;
