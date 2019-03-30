import React, { FunctionComponent } from "react";

import { Dispatch } from "redux";

import { Todo as TodoComponent } from "../Todo";
import { Todo } from "../../store/interfaces";

interface Props {
  todos: Todo[];
  onTodoClick: (id: number) => Dispatch;
}

export const TodoList: FunctionComponent<Props> = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => {
      <TodoComponent
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />;
    })}
  </ul>
);
