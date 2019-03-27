/*
 *     REDUCERS: Todos
 */
interface todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface actionTodo extends todo {
  type: string;
}

const initialState = [];

export const todos = (state: todo[] = initialState, action: actionTodo) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];

    case "TOGGLE_TODO":
      return state.map(task => todo(task, action));
    default:
      return state;
  }
};

/*
 *     REDUCERS: Single Todo
 */
const todo = (state, action: actionTodo) => {
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
