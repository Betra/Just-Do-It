import React, { FunctionComponent } from "react";
import { Dispatch } from "redux";

import { Todo } from "../Todo";
import { Todo as TodoInterface } from "../../store/interfaces";

import styles from "./TodoList.module.css";

export interface Props {
  todos: TodoInterface[];
  onTodoClick: (id: number) => any;
}

export const TodoList: FunctionComponent<Props> = ({ todos, onTodoClick }) => (
  <div className={styles.todos}>
    <ul>
      {todos.map((todo: TodoInterface) => (
        <Todo
          key={todo.id}
          text={todo.text}
          isCompleted={todo.isCompleted}
          onClick={() => onTodoClick(todo.id)}
        />
      ))}
    </ul>
  </div>
);
