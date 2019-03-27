import { createStore } from "redux";

import { devTools } from "./devbuild";
import { coreReducer } from "./coreReducer";

export const store = createStore(coreReducer, devTools);
