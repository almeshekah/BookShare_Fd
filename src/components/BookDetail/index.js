// Components
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Loading from "../Loading";
//styles
import { BookWrapper } from "./styles";

const BookDetail = () => {
  const bookSlug = useParams().bookSlug;
  const book = useSelector((state) =>
    state.bookReducer.books.find((book) => book.slug === bookSlug)
  );
  console.log("🚀 ~ file: index.js ~ line 15 ~ BookDetail ~ book", book);

  const loading = useSelector((state) => state.bookReducer.loading);
  if (loading) return <Loading />;
  return (
    <BookWrapper>
      <img alt={book.name} src={book.image} />
      <p>{book.name}</p>
      <p>{book.author}</p>
      <p>{book.type}</p>
    </BookWrapper>
  );
};

export default BookDetail;
