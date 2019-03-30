import React from "react";
import { VisibleTodoList } from "../VisibleTodoList";
import { AddTodoForm } from "../AddTodoForm";
import { TodoList } from "../TodoList";
import { VisibilityLinks } from "../VisibilityLinks";

export const TodoApp = () => (
  <main>
    <AddTodoForm />
    <VisibleTodoList />
    <VisibilityLinks />
  </main>
);
