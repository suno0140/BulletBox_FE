import { DiaryType } from '@api/DairyApi';

const GET_DIARY = 'GET_DIARY';
const ADD_DIARY = 'ADD_DIARY';

export type DiaryState = {
  diaries: DiaryType[];
};

type DiaryAction = {
  type: typeof GET_DIARY | typeof ADD_DIARY;
  payload: any;
};

export const getDiary = (payload): DiaryAction => {
  return {
    type: GET_DIARY,
    payload,
  };
};

export const addDiary = (payload): DiaryAction => {
  return {
    type: ADD_DIARY,
    payload,
  };
};

const initialState: DiaryState = {
  diaries: [],
};

const diaries = (state = initialState, action: DiaryAction) => {
  switch (action.type) {
    case GET_DIARY: {
      const diariesArray = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key],
      }));
      return {
        ...state,
        diaries: diariesArray,
      };
    }

    case ADD_DIARY: {
      return {
        ...state,
        emotion: action.payload.emotion,
        diaryText: action.payload.diaryText,
      };
    }

    default:
      return state;
  }
};

export default diaries;
