import { useSelector } from "react-redux";

// Components
import BookList from "../BookList";
import Loading from "../Loading";

const CategoryDetail = () => {
  const books = useSelector((state) => state.categoryReducer.books);
  const loading = useSelector((state) => state.categoryReducer.loadingOfBooks);

  if (loading) return <Loading />;
  return <BookList books={books} />;
};

export default CategoryDetail;
