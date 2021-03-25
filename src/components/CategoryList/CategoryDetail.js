import { Link, Redirect, useParams } from "react-router-dom";

import { DetailWrapper } from "./styles";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import BookList from "../BookList";

const CategoryDetail = () => {
  const categorySlug = useParams().categorySlug;
  const allBook = useSelector((state) => state.bookReducer.books);
  const loading = useSelector((state) => state.categoryReducer.loading);

  const category = useSelector((state) =>
    state.categoryReducer.categories.find(
      (category) => category.slug === categorySlug
    )
  );
  if (loading) return <h1>LODAING</h1>;
  console.log(
    "🚀 ~ file: CategoryDetail.js ~ line 16 ~ CategoryDetail ~ category",
    category
  );

  const books = category.books.map((book) =>
    allBook.find((_book) => _book.id === book.id)
  );

  return (
    <>
      <DetailWrapper className="text-left">
        <Helmet>
          <title>{category.name}</title>
        </Helmet>
      </DetailWrapper>
      <BookList books={books} />
    </>
  );
};

export default CategoryDetail;
