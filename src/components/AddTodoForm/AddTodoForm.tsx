import React from "react";
//connect later

import { AddTodoInput } from "../AddTodoInput";
import { AddTodoButton } from "../AddTodoButton";

export const AddTodoForm = () => {
  return (
    <div>
      <AddTodoInput />
      <AddTodoButton onClick={() => alert()} />
    </div>
  );
};
