// import React, { useState } from 'react';
// import {
//   AddInputButtonContainer,
//   FlexContainer,
//   TodoCateBtnContainer,
//   TodoCateContainer,
// } from '@components/atoms/Container';
// import { MainForm } from '@components/atoms/Form';
// import { FormInput } from '@components/atoms/Input';
// import {
//   CancleBtn,
//   SubmitBtn,
//   TodoCategoryBtn,
// } from '@components/atoms/Button';
// import { updateTodoApi } from '@api/TodoApi';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { errorToast, successToast } from '@components/atoms/toast';
// import { useSelector } from 'react-redux';
// import { RootState } from '@redux/config/configStore';
// import { GrayBoldSpan } from '@components/atoms/Span';
// import { useGetCategories, useGetTodos } from '@hooks/useGetApi';

// const DailyLogUpdate = () => {
//   const categories = useSelector(
//     (state: RootState) => state.categories.categories,
//   );

//   const navigate = useNavigate();
//   const location = useLocation();

//   const initialState = location.state as {
//     todoId: string;
//     todoContent: string;
//   };
//   const todoId = initialState?.todoId;
//   const todoContent = initialState?.todoContent;
//   const [todo, setTodo] = useState(todoContent);
//   const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
//     null,
//   );
//   const [color, setColor] = useState<string | null>(null);

//   const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const todoText = e.currentTarget.value;
//     setTodo(todoText);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (todo.length === 0) {
//       errorToast('할일을 입력해주세요');
//     } else {
//       try {
//         await updateTodoApi({ todo, todoId, color });
//         navigate(location.state.from);
//         successToast('할일 수정 성공');
//       } catch (error) {
//         errorToast('할일 수정 실패');
//         console.log(error);
//       }
//     }
//   };

//   const handleCategoryClick = (id: string, color: string) => {
//     setColor(color);
//     setSelectedCategoryId(id);
//   };

//   const handleCancle = () => {
//     navigate(location.state.from);
//   };

//   useGetTodos();
//   useGetCategories();

//   return (
//     <FlexContainer>
//       <MainForm>
//         <FormInput value={todo} onChange={handleTodo}></FormInput>
//         <TodoCateContainer>
//           <GrayBoldSpan>카테고리</GrayBoldSpan>
//           <TodoCateBtnContainer>
//             {categories?.map((value) => {
//               return (
//                 <TodoCategoryBtn
//                   type="button"
//                   key={value.id}
//                   id={value.id}
//                   name={value.categoryName}
//                   color={value.categoryColor}
//                   $backgroundColor={value.categoryColor}
//                   $isSelected={selectedCategoryId === value.id}
//                   onClick={() =>
//                     handleCategoryClick(value.id, value.categoryColor)
//                   }
//                 >
//                   {value.categoryName}
//                 </TodoCategoryBtn>
//               );
//             })}
//           </TodoCateBtnContainer>
//         </TodoCateContainer>
//         <AddInputButtonContainer>
//           <SubmitBtn
//             type="submit"
//             onClick={(e) => {
//               void handleSubmit(e);
//             }}
//           >
//             할일 수정
//           </SubmitBtn>
//           <CancleBtn type="button" onClick={handleCancle}>
//             취소
//           </CancleBtn>
//         </AddInputButtonContainer>
//       </MainForm>
//     </FlexContainer>
//   );
// };

// export default DailyLogUpdate;
