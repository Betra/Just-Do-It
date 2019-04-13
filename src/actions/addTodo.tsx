import { Todo } from "../store/interfaces";

let nextId: number = 0;

interface TodoAction extends Todo {
  type: string;
}

export const addTodo = (text: string, deadline: Date): TodoAction => {
  return {
    type: "ADD_TODO",
    id: nextId++,
    text: text,
    isCompleted: false,
    deadline: deadline
  };
};
