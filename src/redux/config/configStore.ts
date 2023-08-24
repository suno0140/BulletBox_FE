import { createStore } from 'redux';
import { combineReducers } from 'redux';
import loading from 'redux/modules/loading';

const rootReducer = combineReducers({
  loading,
});
const store = createStore(rootReducer);

export default store;
