import { Link } from "react-router-dom";

//Material-Ui
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

//Styling
import { makeStyles } from "@material-ui/core/styles";
import { HoverEff } from "./styles";

const CategoryItem = ({ category }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 250,
      borderRadius: "50%",
      height: "250px",
      margin: "10px",
      width: "250px",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },

    media: {
      borderRadius: "50%",
      height: "200px",
      margin: "10px",
      width: "200px",

      // "&:hover": {
      //   transform: "scale(1.2)",
      // },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid container item xs={4} spacing={3}>
        <Grid item xs={6} spacing={3}>
          <HoverEff>
            <Link to={`/categories/${category.slug}`}>
              <CardMedia
                className={clsx(classes.media, classes.tr)}
                className={classes.media}
                image={category.image}
                title={category.name}
              />
            </Link>
            <Typography align="center" variant="h6" className={classes.tr}>
              {category.name}
            </Typography>
          </HoverEff>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryItem;
