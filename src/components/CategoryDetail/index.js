import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// Components
import BookList from "../BookList";
import Loading from "../Loading";

const CategoryDetail = () => {
	const { categorySlug } = useParams();
	const loading = useSelector((state) => state.categoryReducer.loading);
	const mybook = useSelector((state) => state.bookReducer.mybook);

	const category = useSelector((state) =>
		state.categoryReducer.categories.find(
			(category) => category.slug === categorySlug
		)
	);

	const books = mybook.filter((book) => {
		return category.books.some((_book) => {
			return _book.id === book.bookId;
		});
	});
	if (loading) return <Loading />;
	return <BookList books={books} key={books.id} />;
};

export default CategoryDetail;
