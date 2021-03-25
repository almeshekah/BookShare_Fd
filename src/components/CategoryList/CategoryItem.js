import { Link } from "react-router-dom";
import { Image, Card, Title } from "./styles";

const CategoryItem = ({ category }) => {
  return (
    <>
      <Card>
        <Link to={`/categories/${category.slug}`}>
          <Image
            style={{ width: "width:20em" }}
            src={category.image}
            alt={category.name}
          />
        </Link>

        <Title>{category.name}</Title>
      </Card>
    </>
  );
};

export default CategoryItem;
