import React, { useEffect, useState } from 'react';
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
import { errorToast } from '@components/atoms/toast';
import { getCategoryApi } from '@api/CategoryApi';
import { useRequest } from '@hooks/useRequest';

const DailyLogAdd = () => {
  const [todo, setTodo] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const [color, setColor] = useState<string | null>(null);

  const { data: categories, request: getCategories } = useRequest({
    apiFunc: getCategoryApi,
    reduxKey: 'categories',
  });

  const { request: addTodo } = useRequest({
    apiFunc: addTodoApi,
    reduxKey: 'todos',
    successMessage: '할일 추가 성공',
    errorMessage: '할일 추가 실패',
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoText = e.currentTarget.value;
    setTodo(todoText);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.length === 0) {
      errorToast('할일을 입력해주세요');
    } else {
      await addTodo({ todo, color });
      navigate(location.state.from);
    }
  };

  const handleCancle = () => {
    navigate(location.state.from);
  };

  const handleCategoryClick = (id: string, color: string) => {
    setColor(color);
    setSelectedCategoryId(id);
  };

  useEffect(() => {
    getCategories();
  }, []);

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
            {categories &&
              Object.entries(categories).map(
                ([categoryId, categoryItem]: [string, any]) => {
                  return (
                    <TodoCategoryBtn
                      type="button"
                      key={categoryId}
                      id={categoryId}
                      name={categoryItem.categoryName}
                      color={categoryItem.categoryColor}
                      $backgroundColor={categoryItem.categoryColor}
                      $isSelected={selectedCategoryId === categoryId}
                      onClick={() =>
                        handleCategoryClick(
                          categoryId,
                          categoryItem.categoryColor,
                        )
                      }
                    >
                      {categoryItem.categoryName}
                    </TodoCategoryBtn>
                  );
                },
              )}
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
