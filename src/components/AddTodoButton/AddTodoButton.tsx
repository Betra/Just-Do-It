import React from "react";

import styles from "./AddTodoButton.module.css";

interface button {
  value?: string;
  onClick: any;
}

export const AddTodoButton = ({ value = "Submit", onClick }: button) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {value}
  </button>
);
