import { Filter } from "../interfaces";
/*
 *     Reducer: Filter
 */

interface FilterAction extends Filter {
  type: string;
}

export const filter = (state: string = "SHOW_ALL", action: FilterAction) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};
