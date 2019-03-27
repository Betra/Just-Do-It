/*
 *     REDUCERS: Todos
 */
interface todos {
  type?: string;
  id?: number;
  task?: string;
}

const initialState = {};

export const todos = (state: todos = initialState, action: todos) => {
  switch (action.type) {
    default:
      return state;
  }
};
