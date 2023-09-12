// import React, { useEffect, useState } from 'react';

// import { useSelector } from 'react-redux';
// import { RootState } from '@redux/config/configStore';
// import {
//   MainPageContaiver,
//   MainTodoContainer,
// } from '@components/atoms/Container';
// import MainTodoCard from '@components/molecules/MainTodoCard';
// import { useGetTodos } from '@hooks/useGetApi';
// import { useDebounce } from '@hooks/useDebounce';
// import { CancleIcon } from '@components/atoms/Icon';
// import { SearchForm } from '@components/atoms/Form';
// import { SearchInput } from '@components/atoms/Input';
// import { SearchCancleBtn } from '@components/atoms/Button';

// const Search = () => {
//   const todos = useSelector((state: RootState) => state.todos.todos);
//   const [keyword, setKeyword] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const debouncedKeyword = useDebounce(keyword, 500);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setKeyword(value);
//   };

//   useEffect(() => {
//     if (debouncedKeyword) {
//       const filteredTodos = todos.filter((todo) =>
//         todo.todo.toLowerCase().includes(debouncedKeyword.toLowerCase()),
//       );
//       setSearchResults(filteredTodos);
//     } else {
//       setSearchResults([]);
//     }
//   }, [debouncedKeyword]);

//   useGetTodos();

//   return (
//     <>
//       <SearchForm>
//         <SearchInput
//           type="text"
//           value={keyword}
//           placeholder="작성한 할일 키워드를 검색해보세요."
//           onChange={(e) => {
//             handleSearch(e);
//           }}
//         ></SearchInput>
//         <SearchCancleBtn
//           type="button"
//           onClick={() => {
//             setKeyword('');
//           }}
//         >
//           <CancleIcon />
//         </SearchCancleBtn>
//       </SearchForm>

//       <MainPageContaiver>
//         <MainTodoContainer>
//           {keyword === '' ? (
//             <p>할일을 검색해보세요</p>
//           ) : (
//             searchResults.map((todo) => (
//               <MainTodoCard
//                 key={todo.id}
//                 todoId={todo.id}
//                 todoContent={todo.todo}
//                 time={null}
//                 color={todo.color}
//               />
//             ))
//           )}
//         </MainTodoContainer>
//       </MainPageContaiver>
//     </>
//   );
// };

// export default Search;
