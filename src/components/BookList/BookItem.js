import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import DetailDialog from "./DetailDialog";

//Material-Ui
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

//Styling
import MessageIcon from "@material-ui/icons/Message";

import { makeStyles } from "@material-ui/core/styles";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

const BookItem = ({ book }) => {
  const user = useSelector((state) => state.authReducer.user);

  const profile = useSelector((state) => state.authReducer.profile);
  const otheProfile = useSelector((state) => state.authReducer.otheProfile);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 455,
      height: 260,
      borderRadius: 5,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
    media: {
      width: 150,
      height: 230,
      marginLeft: "1em",
      marginBottom: "-10em",
    },
    divider: {
      background: theme.palette.primary.main,
      marginTop: "2em",
    },
    dividerNotSignin: {
      background: theme.palette.primary.main,
      marginTop: "5.5em",
    },
    dividerSignin: {
      background: theme.palette.primary.main,
      marginTop: "5.7em",
    },
    icons: {
      marginTop: "-1em",
      marginLeft: "2em",
    },
    bookTitle: {
      marginTop: "-2.5em",
      marginLeft: "7em",
      marginBottom: "1em",
    },
    bookAuthor: {
      marginTop: "-1.7em",
      marginLeft: "10.5em",
      marginBottom: "1em",
    },
    bookType: {
      marginTop: "-1em",
      marginLeft: "9.5em",
    },

    moreButton: {
      marginTop: "1em",
      marginLeft: "10.5em",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },

    bookTypeIcons: {
      marginLeft: "0.5em",
    },

    avatar: {
      marginTop: "0.3em",
    },
    userName: {
      marginLeft: "3em",
      marginTop: "-2em",
    },
    notSignin: {
      marginTop: "1.3em",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Grid item xs={5}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <CardMedia className={classes.media} image={book.books.image} />
        </Grid>
        <Card className={classes.root} backgroundColor="secondary">
          {user && user.id === book.user.id ? (
            <>
              <CardContent>
                <CardHeader
                  action={<DetailDialog bookId={book.books.id} mybook={book} />}
                />
                <>
                  <Typography variant="h5" className={classes.bookTitle}>
                    {book.books.name}
                  </Typography>

                  <Typography className={classes.bookAuthor}>
                    by {book.books.author}
                  </Typography>
                  <CardContent>
                    {book.typeOfExchange === "trade" ? (
                      <>
                        <Typography
                          className={classes.bookType}
                          color="primary"
                        >
                          Listed for {book.typeOfExchange}
                          <FaIcons.FaExchangeAlt
                            className={classes.bookTypeIcons}
                          />
                        </Typography>

                        <Divider className={classes.dividerSignin} />
                        <Link to={`/profile`}>
                          <Avatar
                            aria-label="user"
                            src={profile.image}
                            alt={user.firstName}
                            className={classes.avatar}
                          />
                        </Link>

                        <Typography className={classes.userName}>
                          {user.firstName} {user.lastName}
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography
                          className={classes.bookType}
                          color="primary"
                        >
                          Listed for {book.typeOfExchange}
                          <BsIcons.BsGiftFill
                            className={classes.bookTypeIcons}
                          />
                        </Typography>

                        <Divider className={classes.dividerSignin} />
                        <Link to={`/profile`}>
                          <Avatar
                            aria-label="book"
                            src={profile.image}
                            alt={user.firstName}
                            className={classes.avatar}
                          />
                        </Link>
                        <Typography className={classes.userName}>
                          {user.firstName} {user.lastName}
                        </Typography>
                      </>
                    )}
                  </CardContent>
                </>
              </CardContent>
            </>
          ) : (
            <>
              <CardContent>
                <CardHeader
                  action={<DetailDialog bookId={book.books.id} mybook={book} />}
                />

                <>
                  <Typography variant="h5" className={classes.bookTitle}>
                    {book.books.name}
                  </Typography>

                  <Typography className={classes.bookAuthor}>
                    by {book.books.author}
                  </Typography>
                  <CardContent>
                    {book.typeOfExchange === "trade" ? (
                      <>
                        <Typography
                          className={classes.bookType}
                          color="primary"
                        >
                          Listed for {book.typeOfExchange}
                          <FaIcons.FaExchangeAlt
                            className={classes.bookTypeIcons}
                          />
                        </Typography>
                        {user ? (
                          <>
                            <Link
                              to={`/requests/new`}
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="contained"
                                className={clsx(
                                  classes.primaryColor,
                                  classes.button,
                                  classes.moreButton
                                )}
                                endIcon={<MessageIcon />}
                              >
                                Request
                              </Button>
                            </Link>
                            <Divider className={classes.divider} />
                          </>
                        ) : (
                          <Divider className={classes.dividerNotSignin} />
                        )}
                        {user ? (
                          <>
                            <Link
                              to={`/otherprofile/${book.userId}`}
                              style={{ textDecoration: "none" }}
                            >
                              <Avatar
                                aria-label="book"
                                // src={otheProfile.image}
                                className={classes.avatar}
                              >
                                U
                              </Avatar>
                            </Link>
                            <Typography className={classes.userName}>
                              Listed by {book.user.firstName}{" "}
                              {book.user.lastName}
                            </Typography>
                          </>
                        ) : (
                          <>
                            <Link
                              to={`/signin`}
                              style={{ textDecoration: "none" }}
                            >
                              <Typography
                                align="center"
                                className={classes.notSignin}
                                color="primary"
                              >
                                Sign in to make a request
                              </Typography>
                            </Link>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <Typography
                          className={classes.bookType}
                          color="primary"
                        >
                          Listed for {book.typeOfExchange}
                          <BsIcons.BsGiftFill
                            className={classes.bookTypeIcons}
                          />
                        </Typography>

                        {/* User not Sign in can not make req */}
                        {user ? (
                          <>
                            <Link
                              to={`/requests/new`}
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                variant="contained"
                                className={clsx(
                                  classes.primaryColor,
                                  classes.button,
                                  classes.moreButton
                                )}
                                endIcon={<MessageIcon />}
                              >
                                Request
                              </Button>
                            </Link>
                            <Divider className={classes.divider} />
                          </>
                        ) : (
                          <Divider className={classes.dividerNotSignin} />
                        )}

                        {user ? (
                          <>
                            <Link
                              to={`/otherprofile/${book.userId}`}
                              style={{ textDecoration: "none" }}
                            >
                              <Avatar
                                aria-label="book"
                                // src={otheProfile.image}
                                className={classes.avatar}
                              >
                                U
                              </Avatar>
                            </Link>
                            <Typography className={classes.userName}>
                              Listed by {book.user.firstName}{" "}
                              {book.user.lastName}
                            </Typography>
                          </>
                        ) : (
                          <>
                            <Link to={`/signin`}></Link>

                            <Typography
                              className={classes.notSignin}
                              align="center"
                            >
                              Sign in to make a request
                            </Typography>
                          </>
                        )}
                      </>
                    )}
                  </CardContent>
                </>
              </CardContent>
            </>
          )}
        </Card>
      </Grid>
    </>
  );
};

export default BookItem;
