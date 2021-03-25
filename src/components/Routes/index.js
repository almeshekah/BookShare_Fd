import { Route, Switch } from "react-router";

import React from "react";
import Signup from "../authorisation/Signup";
import Signin from "../authorisation/Signin";
import Userprofile from "../Userprofile";

import Home from "../Home";
const Routes = () => {
  return (
    <Switch>
      <Route path={["/user/signup", "/profile/edit"]}>
        <Signup />
      </Route>

      <Route exact path="/profile">
        <Userprofile />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/profile">
        <Userprofile />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
