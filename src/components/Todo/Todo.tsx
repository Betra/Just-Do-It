import React, { FunctionComponent } from "react";
import { DeadlineString } from "../DeadlineString";

import styles from "./Todo.module.css";

interface Props {
  onClick: (event: React.MouseEvent) => any;
  isCompleted: boolean;
  text: string;
  deadline: Date;
}

export const Todo: FunctionComponent<Props> = ({
  onClick,
  isCompleted,
  text,
  deadline
}) => (
  <li
    className={styles.task}
    onClick={onClick}
    style={{
      textDecoration: isCompleted ? "line-through" : "none"
    }}
  >
    <span>{text} </span>

    {deadline!.toString() != "Invalid Date" && (
      <DeadlineString deadline={deadline} />
    )}
  </li>
);
