import React, { forwardRef } from "react";

export type Ref = HTMLInputElement | null;

interface Props {}

export const AddTodoDeadline = forwardRef<Ref, Props>((props, ref) => (
  <input type="text" placeholder="Choose a deadline" ref={ref as any} />
));
