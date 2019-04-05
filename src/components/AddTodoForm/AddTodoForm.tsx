import React, { useRef, FunctionComponent } from "react";
import { connect } from "react-redux";

import { Dispatch } from "redux";

import { AddTodoInput } from "../AddTodoInput";
import { AddTodoButton } from "../AddTodoButton";
import { addTodo } from "../../actions";

interface Props {
  dispatch: Dispatch;
}

const AddTodoFormContainer: FunctionComponent<Props> = ({ dispatch }) => {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      {/* <AddTodoInput ref={r => (ref.current = r)} /> Temporary solution; refs are hard in ts*/}
      <input type="text" ref={r => (ref.current = r)} />

      <AddTodoButton
        onClick={() => {
          if (!ref.current) return;
          dispatch(addTodo(ref.current.value));
          ref.current.value = "";
        }}
      />
    </div>
  );
};

export const AddTodoForm = connect()(AddTodoFormContainer);
