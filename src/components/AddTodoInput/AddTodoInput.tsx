import React, { forwardRef } from "react";

import styles from "./AddTodoInput.module.css";

interface Props {
  placeholder?: string;
  required?: boolean;
}

export type Ref = HTMLInputElement | null;

export const AddTodoInput = forwardRef<Ref, Props>(
  ({ placeholder = "What do you want to do?", required = true }, ref) => (
    <input
      type="text"
      size={30}
      ref={ref as any}
      className={styles.inputText}
      placeholder={placeholder}
      required={required}
    />
  )
);
