import { createStore } from 'redux';
import { combineReducers } from 'redux';
import loading from 'redux/modules/loading';
import categories from '@redux/modules/categories';
import todos, { TodoState } from '@redux/modules/todos';

export type RootState = {
  loading: typeof loading;
  categories: typeof categories;
  todos: TodoState;
};

const rootReducer = combineReducers({
  loading,
  categories,
  todos,
});
const store = createStore(rootReducer);

export default store;
