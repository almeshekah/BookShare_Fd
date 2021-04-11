import { Link } from "react-router-dom";

//Material-Ui
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//Styling
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/images/Logo.png";
import Exchange from "../../assets/images/Exchange.svg";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

const About = () => {
  const useStyles = makeStyles((theme) => ({
    card: {
      width: 800,
      height: 400,
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
      width: 150,
      height: 175,
      marginTop: "2em",
    },

    icons: {
      width: 160,
      height: 175,
      marginTop: "2em",
    },

    recently: {
      fontWeight: "bold",
      marginTop: "1em",
    },
    what: {
      fontWeight: "bold",
      marginTop: "1em",
      marginBottom: "1em",
    },
    how: {
      fontWeight: "bold",
      marginTop: "1em",
      marginBottom: "1em",
    },
    bookShare: {
      fontWeight: "bold",
      marginTop: "1em",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" className={classes.recently} align="center">
        About Us
      </Typography>

      <Typography variant="h5" className={classes.what} align="center">
        What is BookShare?
      </Typography>
      <>
        <Grid container direction="row" justify="center" alignItems="center">
          <Card className={classes.card}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CardMedia
                className={classes.media}
                image={Logo}
                alt="Logo"
                title="Logo"
              />
            </Grid>
            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              BookShare is website that allows readers to exchange their books
              with fellow readers.
              {/* lorem20 */}
            </Typography>
            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              Thanks to our website you will be able to trade you old books
            </Typography>
            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              in return you will get books that interest you in very good
              conditions
            </Typography>
          </Card>
        </Grid>
      </>

      <>
        <Typography variant="h5" className={classes.how} align="center">
          How Does it Work?
        </Typography>

        <Grid container direction="row" justify="center" alignItems="center">
          <Card className={classes.card}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Typography
                className={classes.bookType}
                color="primary"
                variant="h1"
              >
                <FaIcons.FaExchangeAlt className={classes.bookTypeIcons} />
              </Typography>
            </Grid>

            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              From the list books you can choose a book to trade with other
              users
            </Typography>

            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              Ones you click on Request you can select the books you wish to
              trade
            </Typography>

            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              Ones the other user receives your request upon accepting the
              request
            </Typography>

            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              You will be notified by email
            </Typography>
          </Card>
        </Grid>
      </>

      <>
        <Typography variant="h5" className={classes.how} align="center">
          Giveaway
        </Typography>

        <Grid container direction="row" justify="center" alignItems="center">
          <Card className={classes.card} style={{ marginBottom: "2em" }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Typography
                className={classes.bookType}
                color="primary"
                variant="h1"
              >
                <BsIcons.BsGiftFill className={classes.bookTypeIcons} />
              </Typography>
            </Grid>

            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              From the list books you can choose a book to get for free
            </Typography>

            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              Ones you click on Request you can select the books you wish to get
            </Typography>

            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              Ones the other user receives your request upon accepting the
              request
            </Typography>

            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              You will be notified by email and you will able to contact the
              user
            </Typography>
            <Typography
              variant="h6"
              className={classes.bookShare}
              align="center"
            >
              To agree on the your location in this case you will pay the
              delivery charges
            </Typography>
          </Card>
        </Grid>
      </>
    </>
  );
};

export default About;
