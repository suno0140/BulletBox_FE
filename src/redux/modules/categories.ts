const GET_CATEGORY = 'GET_CATEGORY';

type GetCategoryAction = {
  type: typeof GET_CATEGORY;
};

// Action creators
export const getCategory = (): GetCategoryAction => {
  return {
    type: GET_CATEGORY,
  };
};

// Initial State
const initialState = {
  category: [],
};

// Reducer
const categories = (state = initialState, action: GetCategoryAction) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        state,
      };

    default:
      return state;
  }
};

export default categories;
