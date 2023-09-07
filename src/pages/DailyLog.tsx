// import {
//   DateContainer,
//   FlexContainer,
//   MainPageContaiver,
//   MainTodoContainer,
// } from '@components/atoms/Container';
// import { AddCategoryIcon, CategoryAddBtn } from '@components/atoms/Icon';
// import MainTodoCard from '@components/molecules/MainTodoCard';
// import useCurrentDate from '@hooks/useCurrentData';
// import { useGetTodos } from '@hooks/useGetApi';
// import { usePageLocation } from '@hooks/usePageLocation';
// import { RootState } from '@redux/config/configStore';
// import React from 'react';
// import { useSelector } from 'react-redux';

// const DailyLog = () => {
//   const todos = useSelector((state: RootState) => state.todos.todos);
//   const [reload, setReload] = React.useState(false);

//   const currentDate = useCurrentDate();

//   useGetTodos([location, reload]);

//   const { goToDailyLogAdd } = usePageLocation();

//   return (
//     <>
//       <MainPageContaiver>
//         <DateContainer>{currentDate}</DateContainer>
//         <MainTodoContainer>
//           {todos.map((todo) => (
//             <MainTodoCard
//               key={todo.id}
//               todoId={todo.id}
//               todoContent={todo.todo}
//               time={null}
//               color={todo.color}
//               setReload={setReload}
//             />
//           ))}
//         </MainTodoContainer>

//         <FlexContainer>
//           <CategoryAddBtn
//             onClick={() => {
//               goToDailyLogAdd();
//             }}
//           >
//             <AddCategoryIcon />
//           </CategoryAddBtn>
//         </FlexContainer>
//       </MainPageContaiver>
//     </>
//   );
// };

// export default DailyLog;
