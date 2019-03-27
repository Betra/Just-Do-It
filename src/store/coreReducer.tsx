import { combineReducers } from "redux";

import { todos, form } from "./reducers";

export const coreReducer = combineReducers({ todos, form });
