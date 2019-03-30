import React, { FunctionComponent } from "react";

import styles from "./AddTodoButton.module.css";

interface Props {
  value?: string;
  onClick: (event: React.MouseEvent) => any;
}

export const AddTodoButton: FunctionComponent<Props> = ({
  value = "Submit",
  onClick
}) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {value}
  </button>
);
