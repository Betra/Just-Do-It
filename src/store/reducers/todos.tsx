import { Todo } from "../interfaces";
/*
 *     REDUCERS: Todos
 */

interface TodoAction extends Todo {
  type: string;
}

const initialState = [];

export const todos = (state: Todo[] = initialState, action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(state[0], action)];

    case "TOGGLE_TODO":
      return state.map(task => todo(task, action));
    default:
      return state;
  }
};

/*
 *     REDUCERS: Single Todo
 */
const todo = (state: Todo, action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        isCompleted: action.isCompleted
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) return state;
      return {
        ...state,
        isCompleted: !state.isCompleted
      };
    default:
      return state;
  }
};
