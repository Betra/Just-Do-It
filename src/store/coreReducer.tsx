import { combineReducers } from "redux";

import { todos, form, filter } from "./reducers";

export const coreReducer = combineReducers({ todos, form, filter });
