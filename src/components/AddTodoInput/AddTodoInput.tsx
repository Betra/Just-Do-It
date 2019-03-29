import React from "react";
import { connect } from "react-redux";

import styles from "./AddTodoInput.module.css";

import { updateText } from "../../actions";

interface InputProps {
  placeholder?: string;
  ref: (r: any) => any;
}

type ref = React.RefObject<HTMLInputElement>;

export let AddTodoInput = ({
  placeholder = "Insert todo",
  ref
}: InputProps) => (
  <div>
    <input
      type="text"
      ref={ref}
      className={styles.inputText}
      placeholder={placeholder}
    />
  </div>
);

//Input = connect()(Input);
