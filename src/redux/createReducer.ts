import produce from 'immer';
import { AnyAction } from 'redux';

export const REQUEST_START = 'global/REQUEST_START';
export const REQUEST_READY = 'global/REQUEST_READY';
export const SET_CATEGORY_LIST = 'global/SET_CATEGORY_LIST';

export const initialState = {
  requestLoading: false,
  categoryList: [],
};

const globalReducer = (state = initialState, action: AnyAction): any =>
  produce(state, (draft) => {
    console.log(action.type);

    switch (action.type) {
      case REQUEST_START:
        draft.requestLoading = true;
        break;

      case REQUEST_READY:
        draft.requestLoading = false;
        break;

      case SET_CATEGORY_LIST:
        draft.categoryList = action.payload;
        break;
    }
  });

import { combineReducers, Reducer } from 'redux';

const createReducer = (asyncReducers?: Reducer): Reducer =>
  combineReducers({
    globalReducer,
    ...asyncReducers,
  });

export default createReducer;
