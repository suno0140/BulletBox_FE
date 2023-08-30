import React, { useContext, useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@core/AuthContext';
import { getCategoryApi } from '@api/CategoryApi';
import { GrayBoldSpan } from '@components/atoms/Span';

const DailyLogAdd = () => {
  const [todo, setTodo] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const [color, setColor] = useState<string | null>(null);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // const { data, request: todoAddRequest } = useRequest({
  //   apiFunc: addTodoApi,
  //   reduxKey: 'TODO_ADD',
  //   successMessage: '할일 추가 성공',
  //   errorMessage: '할일 추가 실패',
  // });

  // const { request: categoryRequest } = useRequest({
  //   apiFunc: getCategoryApi,
  //   reduxKey: 'GET_CATEGORY',
  // });

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoText = e.currentTarget.value;
    setTodo(todoText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void addTodoApi({ user, todo, color });
    navigate('/main');
  };

  const handleCancle = () => {
    navigate('/main');
  };

  const handleCategoryClick = (id: string, color: string) => {
    setColor(color);
    setSelectedCategoryId(id);
  };

  // useEffect(() => {
  //   if (!userDataLoading && user) {
  //     categoryRequest({ user, setCategoryList });
  //   }
  // }, [user, userDataLoading]);

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
            {categoryList?.map((value) => {
              return (
                <TodoCategoryBtn
                  type="button"
                  key={value.categoryId}
                  id={value.categoryId}
                  name={value.categoryName}
                  color={value.categoryColor}
                  $backgroundColor={value.categoryColor}
                  $isSelected={selectedCategoryId === value.categoryId}
                  onClick={() =>
                    handleCategoryClick(value.categoryId, value.categoryColor)
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
