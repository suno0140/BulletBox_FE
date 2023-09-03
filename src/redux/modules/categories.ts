import { CategoryData } from '@api/CategoryApi';

const GET_CATEGORY = 'GET_CATEGORY';

export type CategoryState = {
  categories: CategoryData[];
};

type GetCategoryAction = {
  type: typeof GET_CATEGORY;
  payload: any;
};

export const getCategory = (payload): GetCategoryAction => {
  return {
    type: GET_CATEGORY,
    payload,
  };
};

const initialState: CategoryState = {
  categories: [],
};

const categories = (state = initialState, action: GetCategoryAction) => {
  switch (action.type) {
    case GET_CATEGORY: {
      const categoryArray = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key],
      }));
      return {
        ...state,
        categories: categoryArray,
      };
    }

    default:
      return state;
  }
};

export default categories;
