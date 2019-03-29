import { Switch, Route } from "react-router-dom";
import React from "react";

import { TodoApp } from "../TodoApp";

export const Main = () => (
  <Switch>
    <Route exact path="/" component={TodoApp} />
  </Switch>
);
