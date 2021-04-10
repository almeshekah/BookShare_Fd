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

const About = () => {
  const useStyles = makeStyles((theme) => ({
    // root: {
    //   width: 455,
    //   height: 260,
    // },
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
      // marginBottom: "1em",
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

      // marginLeft: "3em",
      marginTop: "2em",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" className={classes.recently} align="center">
        About Us
      </Typography>
    </>
  );
};

export default About;
