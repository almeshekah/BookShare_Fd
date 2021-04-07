import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

//Material-Ui
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

// Components
import Loading from "../Loading";
import BookList from "../BookList";
import { viewProfile } from "../../store/actions/authActions";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import { ItemWrapper, Title, ButtonWrapper } from "./styles";
import { AddButtonStyled } from "../../styles";
import MessageIcon from "@material-ui/icons/Message";
import AddIcon from "@material-ui/icons/Add";
import * as FaIcons from "react-icons/fa";

const Userprofile = () => {
  const userId = useParams().userId;

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
      maxHeight: 700,
      borderRadius: 5,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
    media: {
      height: 200,
      width: 200,
    },

    primaryColor: {
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        background: theme.palette.secondary.main,
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
      // "&:hover": {
      //   background: theme.palette.error.secondary,
      // },
    },
    divider: {
      background: theme.palette.primary.main,
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

  const profile = useSelector((state) => state.authReducer.profile);
  const loading = useSelector((state) => state.authReducer.loading);

  const otheProfile = useSelector((state) => state.authReducer.otheProfile);
  const otheProfileloading = useSelector(
    (state) => state.authReducer.otheProfileloading
  );
  if (!userId) {
    if (loading) return <Loading />;
  } else {
    if (otheProfileloading) return <Loading />;
  }

  return (
    <>
      {!userId ? (
        <>
          <>
            <Grid
              container
              spacing={0}
              direction="row"
              alignItems="center"
              justify="center"
              flexWrap="wrap"
              display="flex"
              style={{
                marginTop: "0.8em",
              }}
            >
              <Grid item xs={6}>
                <Card
                  container
                  spacing={3}
                  direction="row"
                  alignItems="center"
                  justify="center"
                  flexWrap="wrap"
                  display="flex"
                  style={{
                    marginLeft: "8em",
                    marginTop: "3em",
                  }}
                  className={classes.root}
                >
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
                      // xs={12}
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                      spacing="0"
                      style={{
                        // marginTop: "0.8em",
                        marginBottom: "0.8em",
                      }}
                    >
                      <Link to="/profile/edit">
                        <Button
                          variant="contained"
                          className={classes.successColor}
                          endIcon={<FaIcons.FaUserEdit />}
                          style={
                            {
                              // marginTop: "0.8em",
                              // marginBottom: "0.8em",
                              // marginLeft: "28em",
                              // paddingTop: "0.5em",
                            }
                          }
                        >
                          Edit My Profile
                        </Button>
                      </Link>
                    </Grid>
                    <Divider className={classes.divider} />

                    <Typography
                      align="left"
                      align="left"
                      color="primary"
                      variant="h6"
                      style={{
                        marginTop: "0.8em",
                        marginBottom: "0.8em",
                      }}
                    >
                      Username: {profile.username}
                    </Typography>

                    {/* <Divider className={classes.divider} /> */}

                    <Grid
                      container
                      spacing={0}
                      // direction="row"
                      alignItems="center"
                      justify="center"
                      flexWrap="wrap"
                      display="flex"
                      // style={{
                      //   marginTop: "0.8em",
                      // }}
                    ></Grid>

                    <Typography
                      align="left"
                      align="left"
                      color="primary"
                      variant="h6"
                      style={{
                        marginTop: "0.8em",
                        marginBottom: "0.8em",
                      }}
                    >
                      Name: {profile.firstName} {profile.lastName}
                    </Typography>

                    {/* <Divider className={classes.divider} /> */}
                    <Typography
                      align="left"
                      color="primary"
                      variant="h6"
                      style={{
                        marginTop: "0.8em",
                        marginBottom: "0.8em",
                      }}
                    >
                      {`Email: ${profile.email}`}
                    </Typography>
                    <Divider className={classes.divider} />
                    <>
                      {/* <Grid
                        item
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing="0"
                        style={{
                          // marginTop: "0.8em",
                          marginBottom: "0.8em",
                        }}
                      > */}
                      {/* <div style={{ textDecoration: 'none' }> */}

                      <Link to="/viewrequest">
                        <Button
                          variant="contained"
                          className={classes.primaryColor}
                          endIcon={<MessageIcon />}
                          style={{
                            marginTop: "0.8em",
                            marginBottom: "0.8em",
                            marginRight: "4em",
                          }}
                        >
                          View Requests
                        </Button>
                      </Link>
                      {/* </Grid> */}

                      {/* </div> */}
                    </>
                    <>
                      <Link to={`/books/new`}>
                        <Button
                          variant="contained"
                          className={classes.primaryColor}
                          startIcon={<AddIcon />}
                          // style={{
                          //   marginTop: "0.8em",
                          //   marginBottom: "0.8em",
                          //   marginRight: "4em",
                          // }}
                        >
                          Add books
                        </Button>
                      </Link>
                    </>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </>

          <div>
            <Title>My Books</Title>

            <BookList books={profile.mybook} />
          </div>
        </>
      ) : (
        <>
          <ItemWrapper>
            <h1
              style={{
                marginBottom: "2%",
                marginLeft: "2.5%",
                marginTop: "2%",
              }}
            >
              {otheProfile.username}
            </h1>
            <img
              src={
                "https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png"
              }
              alt={otheProfile.firstName}
            />
            <p>
              Name: {otheProfile.firstName} {otheProfile.lastName}
            </p>
            <p>{`Email: ${otheProfile.email}`}</p>
            <div className="buttons"></div>
          </ItemWrapper>

          <div>
            <Title>has Books</Title>

            <ButtonWrapper>
              <ButtonWrapper>
                <Link to={`/requests/new`}>
                  <AddButtonStyled>Request</AddButtonStyled>
                </Link>
              </ButtonWrapper>
            </ButtonWrapper>
            <BookList books={otheProfile.hasbook} />
          </div>
        </>
      )}
    </>
  );
};

export default Userprofile;
