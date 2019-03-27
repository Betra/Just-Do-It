import React from "react";
import { connect } from "react-redux";

import styles from "./AddTodoInput.module.css";

import { updateText } from "../../actions";

interface inputTodo {
  placeholder?: string;
}

export let AddTodoInput = ({ placeholder = "Insert todo" }: inputTodo) => {
  return (
    <div>
      <input
        type="text"
        className={styles.inputText}
        placeholder={placeholder}
      />
    </div>
  );
};

//Input = connect()(Input);
