import React, { useRef } from "react";
import { connect } from "react-redux";

import { AddTodoInput } from "../AddTodoInput";
import { AddTodoButton } from "../AddTodoButton";
import { addTodo } from "../../actions";

interface Props {
  dispatch?: any;
}

export let AddTodoForm = ({ dispatch }: Props) => {
  const ref = useRef(null);

  return (
    <div>
      {/* <AddTodoInput ref={r => (ref.current = r)} /> Temporary solution; refs are hard in ts*/}
      <input type="text" ref={r => (ref.current = r)} />

      <AddTodoButton
        onClick={() => {
          dispatch(addTodo(ref.current.value));
          console.log(ref.current.value);
          ref.current.value = "";
        }}
      />
    </div>
  );
};
/*
AddTodoForm = connect(
  null,
  null
)(AddTodoForm);
*/
