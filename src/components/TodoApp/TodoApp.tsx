import React from "react";
import { VisibleTodoList } from "../VisibleTodoList";
import { AddTodoForm } from "../AddTodoForm";

export const TodoApp = () => (
  <main>
    <AddTodoForm />
    <VisibleTodoList />
  </main>
);
