import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//Material-Ui
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import clsx from "clsx";

//Actions
import { viewProfile } from "../../store/actions/authActions";

// Components
import Loading from "../Loading";
import BookList from "../BookList";
import ViewRequest from "../Request/ViewRequest";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import MessageIcon from "@material-ui/icons/Message";
import AddIcon from "@material-ui/icons/Add";
import * as FaIcons from "react-icons/fa";

const Userprofile = () => {
  const userId = useParams().userId;

  const useStyles = makeStyles((theme) => ({
    primaryColor: {
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        background: theme.palette.primary.secondary,
        color: theme.palette.primary.main,
      },
      color: theme.palette.secondary.main,
    },

    successColor: {
      backgroundColor: theme.palette.success.main,
      "&:hover": {
        background: theme.palette.success.secondary,
      },
      color: theme.palette.primary.main,
    },
    errorColor: {
      backgroundColor: theme.palette.error.main,
    },
    media: {
      height: 200,
      width: 200,
      marginTop: "0.8em",
      marginLeft: "2em",
      marginBottom: "0.8em",
    },
    divider: {
      background: theme.palette.primary.main,
    },
    userName: { marginTop: "0.8em", marginBottom: "0.8em" },

    card: {
      maxWidth: 300,
      maxHeight: 700,
      borderRadius: 5,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
    otherUserCard: {
      maxWidth: 300,
      maxHeight: 700,
      borderRadius: 5,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      marginTop: "1em",
    },
    gridMargin: { marginTop: "0.5em" },
    link: {
      textDecoration: "none",
    },
    buttonMargin: {
      marginLeft: "4.5em",
      marginTop: "1em",
    },
    editButtonMargin: {
      marginLeft: "3em",
      marginTop: "1em",
    },
  }));

  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(viewProfile(userId));
    } else {
    }
  }, [userId]);

  const categories = useSelector((state) => state.categoryReducer.categories);
  const profile = useSelector((state) => state.authReducer.profile);
  const loading = useSelector((state) => state.authReducer.loading);
  const mybook = useSelector((state) => state.bookReducer.mybook);

  const otheProfile = useSelector((state) => state.authReducer.otheProfile);
  const otheProfileloading = useSelector(
    (state) => state.authReducer.otheProfileloading
  );
  let hisbook = [];
  let _mybook = [];
  let mycategories = [];
  let hiscategories = [];

  if (!userId) {
    if (loading) return <Loading />;
    _mybook = mybook.filter((book) => profile.userId === book.userId);
    mycategories = categories
      .filter((category) => {
        return profile.myCategory.some((_category) => {
          return _category.categoryId === category.id;
        });
      })
      .map((category) => category.name);
  } else {
    if (otheProfileloading) return <Loading />;
    else {
      hisbook = mybook.filter((book) => otheProfile.userId === book.userId);
      hiscategories = categories
        .filter((category) => {
          return otheProfile.hasCategory.some((_category) => {
            return _category.categoryId === category.id;
          });
        })
        .map((category) => category.name);
    }
  }

  return (
    <>
      {!userId ? (
        <>
          <>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Card className={classes.card}>
                <CardContent>
                  <CardMedia
                    className={classes.media}
                    image={profile.image}
                    title="Profile image"
                    style={{
                      marginTop: "0.8em",
                      marginBottom: "0.8em",
                    }}
                  />
                  <Grid
                    item
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    spacing="0"
                    style={{
                      marginBottom: "0.8em",
                    }}
                  >
                    <Link to="/profile/edit" style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        endIcon={<FaIcons.FaUserEdit />}
                        className={clsx(
                          classes.successColor,
                          classes.editButtonMargin
                        )}
                      >
                        Edit My Profile
                      </Button>
                    </Link>
                  </Grid>
                  <Divider className={classes.divider} />

                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                    flexWrap="wrap"
                    display="flex"
                  ></Grid>

                  <Typography
                    align="left"
                    color="primary"
                    variant="h6"
                    className={classes.userName}
                  >
                    Name: {profile.firstName} {profile.lastName}
                  </Typography>

                  <Typography
                    align="left"
                    color="primary"
                    variant="h6"
                    className={classes.userName}
                  >
                    {`Email: ${profile.email}`}
                  </Typography>
                  <Typography
                    align="left"
                    color="primary"
                    variant="h6"
                    className={classes.userName}
                  >
                    {`Categories of Interest: ${mycategories}`}
                  </Typography>
                  <Divider className={classes.divider} />
                  <></>
                  <Link to={`/books/new`} style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      startIcon={<AddIcon />}
                      className={clsx(
                        classes.primaryColor,
                        classes.buttonMargin
                      )}
                    >
                      Add books
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          </>
          <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            flexWrap="wrap"
            display="flex"
          >
            <ViewRequest />
          </Grid>
          <div>
            <Typography
              variant="h4"
              align="center"
              color="primary"
              style={{
                marginTop: "0.5em",
              }}
            >
              My Books
            </Typography>

            <BookList books={_mybook} />
          </div>
        </>
      ) : (
        <>
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            flexWrap="wrap"
            display="flex"
            className={classes.gridMargin}
          >
            <Grid
              container
              spacing={3}
              direction="row"
              alignItems="center"
              justify="center"
              flexWrap="wrap"
              display="flex"
            >
              <Card className={clsx(classes.root, classes.otherUserCard)}>
                <CardContent>
                  <CardMedia
                    className={classes.media}
                    image={otheProfile.image}
                    title="Profile image"
                  />

                  <Divider className={classes.divider} />

                  <Typography
                    align="left"
                    color="primary"
                    variant="h6"
                    className={classes.userName}
                  >
                    Name: {otheProfile.firstName} {otheProfile.lastName}
                  </Typography>

                  <Typography
                    align="left"
                    color="primary"
                    variant="h6"
                    className={classes.userName}
                  >
                    {`Email: ${otheProfile.email}`}
                  </Typography>
                  <Typography
                    align="left"
                    color="primary"
                    variant="h6"
                    className={classes.userName}
                  >
                    {`Categories of Interest: ${hiscategories}`}
                  </Typography>
                  <Divider className={classes.divider} />
                  <></>
                  <>
                    <Link
                      to={`/requests/new`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        className={clsx(
                          classes.primaryColor,
                          classes.buttonMargin
                        )}
                        endIcon={<MessageIcon />}
                      >
                        Request
                      </Button>
                    </Link>
                  </>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <div>
            <Typography
              variant="h4"
              align="center"
              color="primary"
              style={{
                marginTop: "1em",
                marginBottom: "0.5em",
              }}
            >
              {otheProfile.firstName} {otheProfile.lastName} Books
            </Typography>

            <BookList books={hisbook} />
          </div>
        </>
      )}
    </>
  );
};

export default Userprofile;
