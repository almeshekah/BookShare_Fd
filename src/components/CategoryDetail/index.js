import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Components
import BookList from "../BookList";
import Loading from "../Loading";

const CategoryDetail = () => {
  const { categorySlug } = useParams();

  const loading = useSelector((state) => state.categoryReducer.loading);

  const allBook = useSelector((state) => state.bookReducer.books);

  // console.log(shop);
  const category = useSelector((state) =>
    state.categoryReducer.categories.find(
      (category) => category.slug === categorySlug
    )
  );
  console.log(
    "🚀 ~ file: index.js ~ line 20 ~ CategoryDetail ~ category",
    category
  );

  const books = category.books.map((categoryBook) =>
    allBook.find((_book) => _book.id === categoryBook.id)
  );
  console.log(category.books);
  if (loading) return <Loading />;
  return <BookList books={books} key={books.id} />;
};
// console.log("🚀 ~ file: index.js ~ line 31 ~ CategoryDetail ~ book", books);

export default CategoryDetail;
