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
import { updateTodoApi } from '@api/TodoApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { errorToast } from '@components/atoms/toast';

import { GrayBoldSpan } from '@components/atoms/Span';
import { useRequest } from '@hooks/useRequest';
import { getCategoryApi } from '@api/CategoryApi';
import { usePageLocation } from '@hooks/usePageLocation';
import { AddCategoryIcon, CategoryAddBtn } from '@components/atoms/Icon';

const DailyLogUpdate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialState = location.state as {
    todoId: string;
    todoContent: string;
    color: string;
  };
  const todoId = initialState?.todoId;
  const todoContent = initialState?.todoContent;
  const initialColor = initialState?.color;
  const [todo, setTodo] = useState(todoContent);
  const [selectedColor, setSelectedColor] = useState<string | null>(
    initialColor,
  );
  const [color, setColor] = useState<string | null>(initialColor);

  console.log(initialState, 'color');

  const { data: categories, request: getCategories } = useRequest({
    apiFunc: getCategoryApi,
    reduxKey: 'categories',
  });

  const { request: updateTodo } = useRequest({
    apiFunc: updateTodoApi,
    reduxKey: 'todos',
    successMessage: '할일 추가 성공',
    errorMessage: '할일 추가 실패',
  });

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoText = e.currentTarget.value;
    setTodo(todoText);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.length === 0) {
      errorToast('할일을 입력해주세요');
    } else {
      await updateTodo({ todo, todoId, color });
      navigate(location.state.from);
    }
  };

  const handleCategoryClick = (color: string) => {
    setColor(color);
    setSelectedColor(color);
  };

  const handleCancle = () => {
    navigate(location.state.from);
  };

  const { goToMypage } = usePageLocation();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <FlexContainer>
      <MainForm>
        <FormInput value={todo} onChange={handleTodo}></FormInput>
        <TodoCateContainer>
          <GrayBoldSpan>카테고리</GrayBoldSpan>
          {categories ? (
            <TodoCateBtnContainer>
              {Object.entries(categories).map(
                ([categoryId, categoryItem]: [string, any]) => {
                  return (
                    <TodoCategoryBtn
                      type="button"
                      key={categoryId}
                      id={categoryId}
                      name={categoryItem.categoryName}
                      color={categoryItem.categoryColor}
                      $backgroundColor={categoryItem.categoryColor}
                      $isSelected={selectedColor === categoryItem.categoryColor}
                      onClick={() =>
                        handleCategoryClick(categoryItem.categoryColor)
                      }
                    >
                      {categoryItem.categoryName}
                    </TodoCategoryBtn>
                  );
                },
              )}
            </TodoCateBtnContainer>
          ) : (
            <CategoryAddBtn
              onClick={() => {
                goToMypage();
              }}
            >
              <AddCategoryIcon />
            </CategoryAddBtn>
          )}
        </TodoCateContainer>
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
