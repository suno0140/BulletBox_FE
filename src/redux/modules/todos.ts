import { Todo } from '@api/TodoApi';

const GET_TODO = 'GET_TODO';

export type TodoState = {
  todos: Todo[];
};

type TodoAction = {
  type: typeof GET_TODO;
  payload: any;
};

// Action creators
export const getTodo = (payload): TodoAction => {
  return {
    type: GET_TODO,
    payload,
  };
};

// Initial State
const initialState: TodoState = {
  todos: [],
};

// Reducer
const todos = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case GET_TODO:
      // eslint-disable-next-line no-case-declarations
      const todosArray = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key],
      }));
      return {
        ...state,
        todos: todosArray,
      };

    default:
      return state;
  }
};

export default todos;
