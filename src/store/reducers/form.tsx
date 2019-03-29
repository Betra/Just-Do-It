import { Form } from "../interfaces";
/*
 *     REDUCERS: Form
 */

interface FormAction extends Form {
  type: string;
}

const initialState: Form = {
  text: ""
};

export const form = (state: Form = initialState, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_INPUT_TEXT":
      return { ...state, text: action.text };
    default:
      return state;
  }
};
