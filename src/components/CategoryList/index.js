import { useState } from "react";
import { useSelector } from "react-redux";

// Components
import Loading from "../Loading";
import { ListWrapper } from "./styles";

//Material-Ui
import Grid from "@material-ui/core/Grid";

// Styling
import CategoryItem from "./CategoryItem";
import SearchBar from "../SearchBar";

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
    <>
      <SearchBar setQuery={setQuery} />
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"
        justify="center"
        flexWrap="wrap"
        display="flex"
        style={{
          marginLeft: "17em",
          marginTop: "3em",
        }}
      >
        {categoryList}
      </Grid>
    </>
  );
};

export default CategoryList;
