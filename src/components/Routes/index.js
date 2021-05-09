import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

// Components
import Signup from "../authorisation/Signup";
import Signin from "../authorisation/Signin";
import Userprofile from "../Userprofile";
import Home from "../Home";
import CategoryList from "../CategoryList";
import BookList from "../BookList";
import RecentlyAddedList from "../BookList/RecentlyAddedList";
import CategoryDetail from "../CategoryDetail";
import AddBook from "../AddBook";
import Request from "../Request";
import ViewRequest from "../Request/ViewRequest";
import About from "../About";
import RequestHistory from "../RequestHistory";
import SubCategoryList from "../SubCategoryList";
import SubCategoryDetail from "../SubCategoryDetail";

const Routes = () => {
	const books = useSelector((state) => state.bookReducer.mybook);
	const categories = useSelector((state) => state.categoryReducer.categories);
	const subcategories = useSelector(
		(state) => state.subCategoryReducer.subcategories
	);

	return (
		<Switch>
			<Route path="/about/">
				<About />
			</Route>

			<Route path="/requests/new">
				<Request />
			</Route>

			<Route path="/viewrequest">
				<ViewRequest />
			</Route>
			<Route path="/requesthistory">
				<RequestHistory />
			</Route>
			<Route path="/categories/:subCategorySlug">
				<SubCategoryDetail />
			</Route>
			<Route path="/categories">
				<SubCategoryList subcategories={subcategories} />
			</Route>

			<Route path="/category/:categorySlug">
				<CategoryDetail />
			</Route>
			<Route path="/categories">
				<CategoryList categories={categories} />
			</Route>

			<Route path="/books/new">
				<AddBook />
			</Route>

			<Route path="/books">
				<BookList books={books} />
			</Route>

			<Route path="/books/recent">
				<RecentlyAddedList />
			</Route>
			<Route path="/categories">
				<CategoryList />
			</Route>

			<Route path={["/signup", "/profile/edit"]}>
				<Signup />
			</Route>

			<Route path="/signin">
				<Signin />
			</Route>
			<Route path={["/profile", "/otherprofile/:userId"]}>
				<Userprofile />
			</Route>

			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
};

export default Routes;
