import { Link } from "react-router-dom";

//Material-Ui
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

//Styling
import { makeStyles } from "@material-ui/core/styles";

const CategoryItem = ({ category }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 200,
      borderRadius: 15,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },

    media: {
      // paddingTop: "20%",
      borderRadius: "50%",
      height: "200px",
      margin: "10px",
      width: "200px",
      "&:hover": {
        // backgroundPosition: "right",
        backgroundColor: "#fff000",
      },
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
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={6} spacing={3}>
          {/* <Card className={classes.root}> */}
          {/* <CategoryWrapper> */}
          <Link to={`/categories/${category.slug}`}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CardMedia
                className={clsx(classes.root, classes.media)}
                // className={classes.media}
                image={category.image}
                title={category.name}
              />
            </Grid>
          </Link>
          <Typography align="center" variant="h6">
            {category.name}
          </Typography>
          {/* </CategoryWrapper> */}
          {/* </Card> */}
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryItem;
