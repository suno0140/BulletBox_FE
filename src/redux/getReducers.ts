import { useInjectReducer } from '@hooks/useInjectReducer';
import produce from 'immer';
import { Reducer } from 'redux';
import { getActionTypes } from './getActionCreators';

export default function getReducer(reduxKey: string): Reducer {
  const {
    SET_PARAMETERS,
    SET_DATA,
    REQUEST_READY,
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
    CLEAR_DATA,
  } = getActionTypes(reduxKey);

  const initialState = {};

  const reducer = (state = initialState, action: any) => {
    const result = produce(state, (draft: any): any => {
      switch (action.type) {
        case CLEAR_DATA:
          draft.parameters = undefined;
          draft.data = undefined;
          break;
        case SET_PARAMETERS:
          draft.parameters = !action.parameters
            ? {}
            : { ...(draft.parameters ?? {}), ...action.parameters };
          break;
        case SET_DATA:
          draft.data = !action.data
            ? {}
            : { ...(draft.data ?? {}), ...action.data };
          break;
        case REQUEST_READY:
          draft.requestLoading = false;
          draft.requestSuccess = false;
          draft.requestError = false;
          draft.requestErrorData = undefined;
          break;
        case REQUEST_START:
          draft.requestLoading = true;
          draft.requestError = false;
          draft.requestSuccess = false;
          break;
        case REQUEST_SUCCESS:
          draft.requestLoading = false;
          draft.requestError = false;
          draft.requestSuccess = true;
          draft.data = action.data;
          break;
        case REQUEST_FAIL:
          draft.requestLoading = false;
          draft.requestError = true;
          draft.requestSuccess = false;
          draft.requestErrorData = action.error;
          break;
      }
    });

    return result;
  };

  return reducer;
}

export const useInjectReducerWithApi = (reduxKey: string): any => {
  const reducer = getReducer(reduxKey);

  useInjectReducer({ key: reduxKey, reducer });
};
