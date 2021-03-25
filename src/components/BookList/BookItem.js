import { Link } from "react-router-dom";
import { Image, Card, Title } from "./styles";

const BookItem = ({ book }) => {
  return (
    <>
      <Link to="">
        <Image
          style={{ width: "width:20%", height: "height:20%" }}
          src={book.image}
          alt={book.name}
        />
      </Link>

      <Title>{book.name}</Title>
    </>
  );
};

export default BookItem;
