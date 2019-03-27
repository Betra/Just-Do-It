import { Switch, Route } from "react-router-dom";
import React from "react";

import { Todo } from "../Todo";

export const Main = () => (
  <Switch>
    <Route exact path="/" component={Todo} />
  </Switch>
);
