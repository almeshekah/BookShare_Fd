import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//styles
import { CategoryWrapper } from "./styles";

const CategoryItem = ({ category }) => {
  const dispatch = useDispatch();

  return (
    <CategoryWrapper>
      <Link to={`/categories/${category.slug}`}>
        <img alt={category.name} src={category.image} />
      </Link>
      <p>{category.name}</p>
    </CategoryWrapper>
  );
};

export default CategoryItem;
