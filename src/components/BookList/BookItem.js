import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//styles
import { BookWrapper } from "./styles";

const BookItem = ({ book }) => {
  return (
    <BookWrapper>
      <Link to={`/book/${book.slug}/`}>
        <img alt={book.name} src={book.image} />
      </Link>
      <p>{book.name}</p>
    </BookWrapper>
  );
};

export default BookItem;
