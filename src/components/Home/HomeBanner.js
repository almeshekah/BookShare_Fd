import { Link } from "react-router-dom";

//Material-Ui
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

//Styling
import { makeStyles } from "@material-ui/core/styles";
import redaingImage from "../../assets/images/Reading.svg";

const HomeBanner = () => {
  const useStyles = makeStyles((theme) => ({
    banner: {
      width: 970,
      height: 250,
      borderRadius: 10,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },

    title: {
      fontWeight: "bold",
      marginTop: "1em",
      marginLeft: "1em",
    },
    paragraph: {
      marginTop: "0.9em",
      marginLeft: "1.7em",
      marginBottom: "0.3em",
    },

    primaryColor: {
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        background: theme.palette.primary.secondary,
        color: theme.palette.primary.main,
      },
      color: theme.palette.secondary.main,
    },
    button: {
      marginTop: "1.1em",
      marginLeft: "2.3em",
    },
    media: {
      width: 400,
      height: 230,
      marginTop: "-11.1em",
    },

    recently: {
      fontWeight: "bold",
      marginTop: "2em",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Card className={classes.banner} backgroundColor="secondary">
          <CardContent>
            <Typography variant="h4" align="left" className={classes.title}>
              Share you library
            </Typography>

            <Typography variant="h6" className={classes.paragraph}>
              Exchange your old books with other readers
            </Typography>

            <Link to="/books" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                className={clsx(classes.primaryColor, classes.button)}
              >
                View All
              </Button>
            </Link>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <CardMedia
                className={classes.media}
                image={redaingImage}
                alt="Reading"
                title="Reading"
              />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h5" className={classes.recently} align="left">
          Recently Added Books
        </Typography>
      </Grid>
    </>
  );
};

export default HomeBanner;
