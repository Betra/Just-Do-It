import React, { useRef, FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AddTodoInput } from "../AddTodoInput";
import { AddTodoButton } from "../AddTodoButton";
import { AddTodoDeadline } from "../AddTodoDeadline";

import { addTodo } from "../../actions";

import { parseDate } from "../../utils";

import styles from "./AddTodoForm.module.css";

interface Props {
  dispatch: Dispatch;
}

const AddTodoFormContainer: FunctionComponent<Props> = ({ dispatch }) => {
  const refTask = useRef<HTMLInputElement | null>(null);
  const refDate = useRef<HTMLInputElement | null>(null);

  return (
    <form
      className={styles.form}
      onSubmit={event => {
        event.preventDefault();

        dispatch(
          addTodo(refTask.current!.value, parseDate(refDate.current!.value))
        );

        refTask.current!.value = "";
        refDate.current!.value = "";
      }}
    >
      <AddTodoInput ref={r => (refTask.current = r)} required />
      <AddTodoDeadline ref={r => (refDate.current = r)} />
      <AddTodoButton />
    </form>
  );
};

export const AddTodoForm = connect()(AddTodoFormContainer);
