import { useSelector } from "react-redux";

// Components
import Loading from "../Loading";
import CategoryItem from "./CategoryItem";

//Material-Ui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Styling

const CategoryList = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const loading = useSelector((state) => state.categoryReducer.loading);
  if (loading) return <Loading />;

  const categoryList = categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));

  return (
    <>
      <Typography
        align="center"
        variant="h6"
        style={{
          marginTop: "0.3em",
        }}
      >
        Select a category to view books
      </Typography>
      <Grid
        container
        spacing={10}
        // direction="row"
        // alignItems="center"
        // justify="center"
        // flexWrap="wrap"
        // display="flex"
        style={{
          marginLeft: "5em",
          marginTop: "1em",
          // marginBottom: "-6em",
          paddingLeft: "15em",
        }}
      >
        {categoryList}
      </Grid>
    </>
  );
};

export default CategoryList;
