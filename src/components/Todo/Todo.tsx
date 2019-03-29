import React from "react";

export const Todo = ({ onClick, isCompleted, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: isCompleted ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);
