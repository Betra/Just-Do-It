import React from "react";

import styles from "./AddTodoButton.module.css";

interface Button {
  value?: string;
  onClick: (event: React.MouseEvent) => any;
}

export const AddTodoButton = ({ value = "Submit", onClick }: Button) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {value}
  </button>
);
