const START_LOADING = 'START_LOADING';
const STOP_LOADING = 'STOP_LOADING';

type StartLoadingAction = {
  type: typeof START_LOADING;
};

type StopLoadingAction = {
  type: typeof STOP_LOADING;
};

type LoadingActionTypes = StartLoadingAction | StopLoadingAction;

export const startLoading = (): LoadingActionTypes => {
  return {
    type: START_LOADING,
  };
};

export const stopLoading = (): LoadingActionTypes => {
  return {
    type: STOP_LOADING,
  };
};

const initialState = {
  loading: false,
};

const loading = (state = initialState, action: LoadingActionTypes) => {
  switch (action.type) {
    case START_LOADING:
      return {
        loading: true,
      };

    case STOP_LOADING:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default loading;
