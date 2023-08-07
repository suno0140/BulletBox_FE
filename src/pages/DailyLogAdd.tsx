import React, { useState } from 'react';
import { AddInputButtonGroup, Flexbox } from '@components/Div';
import { StForm } from '@components/Form';
import { FormInput } from '@components/Input';
import { CancleBtn, SubmitBtn } from '@components/Button';
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
    <Flexbox>
      <StForm>
        <FormInput
          placeholder="할일을 추가해보세요"
          value={todo}
          onChange={handleTodo}
        ></FormInput>
        <AddInputButtonGroup>
          <SubmitBtn
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            완료
          </SubmitBtn>
          <CancleBtn>취소</CancleBtn>
        </AddInputButtonGroup>
      </StForm>
    </Flexbox>
  );
};

export default DailyLogAdd;
