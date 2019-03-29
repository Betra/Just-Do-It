import { Todo } from "../store/interfaces";

export const getVisibleTodos = (todos: Todo[], filter: string) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.isCompleted);
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.isCompleted);
  }
};
