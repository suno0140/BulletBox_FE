import produce from 'immer';
import { AnyAction } from 'redux';

export const REQUEST_START = 'global/REQUEST_START';
export const REQUEST_READY = 'global/REQUEST_READY';

export const initialState = {
  requestLoading: false,
};

const globalReducer = (state = initialState, action: AnyAction): any =>
  produce(state, (draft) => {
    switch (action.type) {
      case REQUEST_START:
        draft.requestLoading = true;
        break;

      case REQUEST_READY:
        draft.requestLoading = false;
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
