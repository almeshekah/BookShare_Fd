import { Route, Switch } from "react-router";

import React from "react";
import Signup from "../authorisation/Signup";
import Signin from "../authorisation/Signin";
import Userprofile from "../Userprofile";
import Home from "../Home";
import CategoryList from "../CategoryList";
import BookList from "../BookList";
import CategoryDetail from "../CategoryList/CategoryDetail";
const Routes = () => {
  return (
    <Switch>
      <Route path="/categories/:categorySlug">
        <CategoryDetail />
      </Route>
      <Route path="/categories">
        <CategoryList />
      </Route>

      <Route path="/books">
        <BookList />
      </Route>

      <Route path={["/signup", "/profile/edit"]}>
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
      <Route path="/category">
        <CategoryList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
