import { Link } from "react-router-dom";

// REVIEW: Cleanup imports

//styles
import { BookWrapper } from "./styles";

const BookItem = ({ book }) => {
  return (
    <BookWrapper>
      <Link to={`/books/${book.slug}/`}>
        <img alt={book.name} src={book.image} />
      </Link>
      <p>{book.name}</p>
    </BookWrapper>
  );
};

export default BookItem;
