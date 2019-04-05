import React, { FunctionComponent } from "react";

interface Props {
  onClick: (event: React.MouseEvent) => any;
  isCompleted: boolean;
  text: string;
}

export const Todo: FunctionComponent<Props> = ({
  onClick,
  isCompleted,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: isCompleted ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);
