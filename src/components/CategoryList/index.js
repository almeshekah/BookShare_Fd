import { useState } from "react";
import { useSelector } from "react-redux";

// Components
import Loading from "../Loading";

//Material-Ui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Styling
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const loading = useSelector((state) => state.categoryReducer.loading);
  if (loading) return <Loading />;

  const categoryList = categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
        flexWrap="wrap"
        display="flex"
        style={{
          marginLeft: "3em",
          marginTop: "2em",
        }}
      >
        <Typography
          align="center"
          variant="h6"
          style={{
            marginTop: "0.3em",
          }}
        >
          Select a category to see books
        </Typography>

        {categoryList}
      </Grid>
    </>
  );
};

export default CategoryList;
