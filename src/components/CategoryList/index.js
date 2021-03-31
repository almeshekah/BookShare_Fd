// Components
import { useState } from "react";
import { useSelector } from "react-redux";
// Styling
import CategoryItem from "./CategoryItem";
import SearchBar from "../SearchBar";
import Loading from "../Loading";
import { ListWrapper } from "./styles";

const CategoryList = () => {
  const [query, setQuery] = useState("");

  const categories = useSelector((state) => state.categoryReducer.categories);
  const loading = useSelector((state) => state.categoryReducer.loading);
  if (loading) return <Loading />;

  const categoryList = categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{categoryList}</ListWrapper>
    </div>
  );
};

export default CategoryList;
