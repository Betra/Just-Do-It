import React, { FunctionComponent } from "react";

import styles from "./AddTodoButton.module.css";

interface Props {
  value?: string;
}

export const AddTodoButton: FunctionComponent<Props> = ({
  value = "Submit"
}) => (
  <button className={styles.button} type="submit">
    {value}
  </button>
);
