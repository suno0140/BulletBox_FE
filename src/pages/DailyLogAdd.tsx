import React, { useState } from 'react';
import {
  AddInputButtonContainer,
  FlexContainer,
  TodoCateBtnContainer,
  TodoCateContainer,
} from '@components/atoms/Container';
import { MainForm } from '@components/atoms/Form';
import { FormInput } from '@components/atoms/Input';
import {
  CancleBtn,
  SubmitBtn,
  TodoCategoryBtn,
} from '@components/atoms/Button';
import { addTodoApi } from '@api/TodoApi';
import { useLocation, useNavigate } from 'react-router-dom';

import { GrayBoldSpan } from '@components/atoms/Span';
import { errorToast, successToast } from '@components/atoms/toast';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/config/configStore';
import { useGetCategories, useGetTodos } from '@hooks/useGetApi';

const DailyLogAdd = () => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  );

  const [todo, setTodo] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const [color, setColor] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoText = e.currentTarget.value;
    setTodo(todoText);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.length === 0) {
      console.log(todo.length);
      errorToast('할일을 입력해주세요');
    } else {
      try {
        await addTodoApi({ todo, color });
        navigate(location.state.from);
        successToast('할일 추가 성공');
      } catch (error) {
        errorToast('할일 추가 실패');
        console.log(error);
      }
    }
  };

  const handleCancle = () => {
    navigate(location.state.from);
  };

  const handleCategoryClick = (id: string, color: string) => {
    setColor(color);
    setSelectedCategoryId(id);
  };

  useGetTodos();
  useGetCategories();

  return (
    <FlexContainer>
      <MainForm>
        <FormInput
          placeholder="할일을 추가해보세요"
          value={todo}
          onChange={handleTodo}
        ></FormInput>

        <TodoCateContainer>
          <GrayBoldSpan>카테고리</GrayBoldSpan>
          <TodoCateBtnContainer>
            {categories?.map((value) => {
              return (
                <TodoCategoryBtn
                  type="button"
                  key={value.id}
                  id={value.id}
                  name={value.categoryName}
                  color={value.categoryColor}
                  $backgroundColor={value.categoryColor}
                  $isSelected={selectedCategoryId === value.id}
                  onClick={() =>
                    handleCategoryClick(value.id, value.categoryColor)
                  }
                >
                  {value.categoryName}
                </TodoCategoryBtn>
              );
            })}
          </TodoCateBtnContainer>
        </TodoCateContainer>
        <AddInputButtonContainer>
          <SubmitBtn
            type="submit"
            onClick={(e) => {
              void handleSubmit(e);
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
