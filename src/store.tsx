import { createStore, combineReducers } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const todos = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const todoApp = combineReducers({ todos });
export const store = createStore(todoApp, devTools);
