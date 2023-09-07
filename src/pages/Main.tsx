// import React from 'react';
// import { MainCalendar } from '@components/molecules/Calendar';
// import { useLocation, useNavigate } from 'react-router-dom';

// import MainTodoCard from '@components/molecules/MainTodoCard';
// import {
//   DateContainer,
//   FlexContainer,
//   MainPageContaiver,
//   MainTodoContainer,
// } from '@components/atoms/Container';
// import useCurrentDate from '@hooks/useCurrentData';
// import { useSelector } from 'react-redux';
// import { RootState } from '@redux/config/configStore';
// import { AddCategoryIcon, CategoryAddBtn } from '@components/atoms/Icon';
// import { useGetTodos } from '@hooks/useGetApi';
// import { usePageLocation } from '@hooks/usePageLocation';

// const Main = () => {
//   const todos = useSelector((state: RootState) => state.todos.todos);
//   const [reload, setReload] = React.useState(false);

//   const currentDate = useCurrentDate();
//   const location = useLocation();

//   useGetTodos([location, reload]);

//   const { goToDailyLogAdd } = usePageLocation();

//   return (
//     <>
//       <MainCalendar />
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

// export default Main;
