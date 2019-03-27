/*
 *     REDUCERS: Todos
 */

interface inputForm {
  type?: string;
  text: string;
}
export const form = (state: inputForm = { text: "" }, action: inputForm) => {
  switch (action.type) {
    case "UPDATE_INPUT_TEXT":
      return { ...state, text: action.text };
    default:
      return state;
  }
};
