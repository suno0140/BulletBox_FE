import { createStore } from 'redux';
import { combineReducers } from 'redux';
import loading from 'redux/modules/loading';
import categories, { CategoryState } from '@redux/modules/categories';
import todos, { TodoState } from '@redux/modules/todos';
import diaries, { DiaryState } from '@redux/modules/diaries';

export type RootState = {
  loading: boolean;
  categories: CategoryState;
  todos: TodoState;
  diaries: DiaryState;
};

const rootReducer = combineReducers({
  loading,
  categories,
  todos,
  diaries,
});
const store = createStore(rootReducer);

export default store;
