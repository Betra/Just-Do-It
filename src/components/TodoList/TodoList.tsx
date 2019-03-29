import React from "react";

import { Todo } from "../Todo";
import { Todo as TodoInterface } from "../../store/interfaces";

interface Props {
  todos: TodoInterface[];
  onTodoClick: (id: number) => any;
}

export const TodoList = ({ todos, onTodoClick }: Props) => (
  <ul>
    {todos.map(todo => {
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />;
    })}
  </ul>
);
