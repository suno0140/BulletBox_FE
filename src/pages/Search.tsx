import React, { useEffect, useState } from 'react';

import {
  MainPageContaiver,
  MainTodoContainer,
} from '@components/atoms/Container';
import MainTodoCard from '@components/molecules/MainTodoCard';
import { useDebounce } from '@hooks/useDebounce';
import { CancleIcon } from '@components/atoms/Icon';
import { SearchForm } from '@components/atoms/Form';
import { SearchInput } from '@components/atoms/Input';
import { SearchCancleBtn } from '@components/atoms/Button';
import { getTodoApi } from '@api/TodoApi';
import { useRequest } from '@hooks/useRequest';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [reload, setReload] = useState(false);
  const debouncedKeyword = useDebounce(keyword, 500);

  const { data: todosData, request: getTodos } = useRequest({
    apiFunc: getTodoApi,
    reduxKey: 'todos',
  });
  console.log(todosData);
  console.log(searchResults, '검색 결과');

  const handleSearch = (e) => {
    const value = e.target.value;
    setKeyword(value);
  };

  useEffect(() => {
    getTodos();
  }, [reload]);

  useEffect(() => {
    if (debouncedKeyword && typeof todosData === 'object') {
      const filteredTodos = Object.entries(todosData).filter(
        ([todoId, todoItem]: [string, any]) =>
          todoItem.todo.toLowerCase().includes(debouncedKeyword.toLowerCase()),
      );

      setSearchResults(filteredTodos);
    } else {
      setSearchResults([]);
    }
  }, [reload, debouncedKeyword]);

  return (
    <>
      <SearchForm>
        <SearchInput
          type="text"
          value={keyword}
          placeholder="작성한 할일 키워드를 검색해보세요."
          onChange={(e) => {
            handleSearch(e);
          }}
        ></SearchInput>
        <SearchCancleBtn
          type="button"
          onClick={() => {
            setKeyword('');
          }}
        >
          <CancleIcon />
        </SearchCancleBtn>
      </SearchForm>

      <MainPageContaiver>
        <MainTodoContainer>
          {searchResults.length > 0 ? (
            searchResults.map(([todoId, todoItem]: [string, any]) => (
              <MainTodoCard
                key={todoId}
                todoId={todoId}
                todoContent={todoItem.todo}
                time={null}
                color={todoItem.color}
                setKeyword={setKeyword}
                setReload={setReload}
              />
            ))
          ) : (
            <p>할일을 검색해보세요</p>
          )}
        </MainTodoContainer>
      </MainPageContaiver>
    </>
  );
};

export default Search;
