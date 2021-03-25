import { Route, Switch } from "react-router";

import React from "react";
import Signup from "./authorisation/Signup";
import Signin from "./authorisation/Signin";
import Home from "./Home";
import CategoryList from "./CategoryList/index";
import BookList from "./BookList";
import CategoryDetail from "./CategoryList/CategoryDetail";
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
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
