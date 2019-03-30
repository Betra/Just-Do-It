import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

// Option 1 via store
import { Dispatch } from "redux";
import { updateText } from "../../actions";

// Option 2 via
// via Refs shrug

import styles from "./AddTodoInput.module.css";

interface Props {
  placeholder?: string;
  ref?: (r: any) => any;
  dispatch: Dispatch;
}

export const AddTodoInputContainer: FunctionComponent<Props> = ({
  placeholder = "Insert todo",
  ref,
  dispatch
}) => (
  <input
    type="text"
    ref={ref}
    className={styles.inputText}
    placeholder={placeholder}
    onChange={event => dispatch(updateText(event.target.value))}
  />
);

export const AddTodoInput = connect()(AddTodoInputContainer);
