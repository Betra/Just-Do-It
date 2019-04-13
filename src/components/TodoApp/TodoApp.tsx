import React from "react";
import { VisibleTodoList } from "../VisibleTodoList";
import { AddTodoForm } from "../AddTodoForm";
import { VisibilityLinks } from "../VisibilityLinks";
import { CalendarSmall } from "../CalendarSmall";

import styles from "./TodoApp.module.css";

export const TodoApp = () => (
  <main className={styles.todoApp}>
    <CalendarSmall />
    <VisibleTodoList />
    <AddTodoForm />
    <VisibilityLinks />
  </main>
);
