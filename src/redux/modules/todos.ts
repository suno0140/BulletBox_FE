import { Todo } from '@api/TodoApi';

const GET_TODO = 'GET_TODO';

export type TodoState = {
  todos: Todo[];
};

type TodoAction = {
  type: typeof GET_TODO;
  payload: any;
};

export const getTodo = (payload): TodoAction => {
  return {
    type: GET_TODO,
    payload,
  };
};

const initialState: TodoState = {
  todos: [],
};

const todos = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case GET_TODO: {
      const todosArray = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key],
      }));
      return {
        ...state,
        todos: todosArray,
      };
    }

    default:
      return state;
  }
};

export default todos;
