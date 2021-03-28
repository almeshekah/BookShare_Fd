import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

// Components
import Signup from "../authorisation/Signup";
import Signin from "../authorisation/Signin";
import Userprofile from "../Userprofile";
import Home from "../Home";
import CategoryList from "../CategoryList";
import BookList from "../BookList";
import CategoryDetail from "../CategoryDetail";
import AddBook from "../AddBook";
import BookDetail from "../BookDetail";

const Routes = () => {
  const books = useSelector((state) => state.bookReducer.books);
  return (
    <Switch>
      <Route path="/categories/:categorySlug">
        <CategoryDetail />
      </Route>
      <Route path="/categories">
        <CategoryList />
      </Route>

      <Route path="/books/new">
        <AddBook />
      </Route>
      <Route path="/books/:bookSlug">
        <BookDetail />
      </Route>

      <Route path="/books">
        <BookList books={books} />
      </Route>

      <Route path={["/signup", "/profile/edit"]}>
        <Signup />
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
