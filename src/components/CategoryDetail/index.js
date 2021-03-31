import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Components
import BookList from "../BookList";
import Loading from "../Loading";

const CategoryDetail = () => {
  const { categorySlug } = useParams();

  const loading = useSelector((state) => state.categoryReducer.loading);
  const category = useSelector((state) =>
    state.categoryReducer.categories.find(
      (category) => category.slug === categorySlug
    )
  );
  // console.log(category.books);

  if (loading) return <Loading />;
  return <BookList books={category.books} />;
};

export default CategoryDetail;
