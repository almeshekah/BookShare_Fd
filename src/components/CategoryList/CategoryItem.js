import { Link } from "react-router-dom";

//Material-Ui
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

//Styling
import { makeStyles } from "@material-ui/core/styles";
import { CategoryWrapper } from "./styles";

const CategoryItem = ({ category }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 300,
      borderRadius: 15,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
    // bullet: {
    //   maxWidth: 250,

    //   display: "inline-block",
    //   margin: "0 2px",
    //   transform: "scale(0.8)",
    // },
    media: {
      paddingTop: "100.25%",
      borderRadius: "50%",
      // margin: "28px",
    },
    title: {
      fontSize: 14,
    },
    // pos: {
    //   marginBottom: 12,
    // },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CategoryWrapper>
            <Link to={`/categories/${category.slug}`}>
              <CardMedia
                className={classes.media}
                image={category.image}
                title={category.name}
              />
            </Link>
            <Typography align="center">{category.name}</Typography>
          </CategoryWrapper>
        </Card>
      </Grid>
    </>
  );
};

export default CategoryItem;
