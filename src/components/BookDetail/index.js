import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import Loading from "../Loading";

// Styling
import {
  ItemWrapper,
  GoButtonStyled,
  ButtonWrapper,
  ImgWrapper,
} from "./styles";

const BookDetail = () => {
  const { bookSlug } = useParams();

  const book = useSelector((state) =>
    state.bookReducer.books.find((book) => book.slug === bookSlug)
  );

  const user = useSelector((state) => state.authReducer.user);

  const profile = useSelector((state) => state.authReducer.profile);

  console.log("🚀 ~ file: index.js ~ line 23 ~ BookDetail ~ user", user);

  const loading = useSelector((state) => state.bookReducer.loading);
  if (loading) return <Loading />;
  return (
    <>
      <Helmet>
        <title>{book.name}</title>
      </Helmet>
      <ButtonWrapper>
        <Link to="/books">
          <GoButtonStyled>Back to books</GoButtonStyled>
        </Link>
      </ButtonWrapper>
      <ItemWrapper>
        <ImgWrapper>
          <img alt={book.name} src={book.image} />
        </ImgWrapper>
        <p>Book Name: {book.name}</p>
        <p>Author: {book.author}</p>
        <p>Type: {book.type}</p>
        {/* <p>User: {user.username}</p> */}
        <p>User: {profile.username}</p>
      </ItemWrapper>
    </>
  );
};

export default BookDetail;
