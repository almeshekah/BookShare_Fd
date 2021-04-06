import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Material-Ui
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

//Actions
import { acceptRequest } from "../../store/actions/requestActions";
import { rejectRequest } from "../../store/actions/requestActions";

//Styling
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const RequestItem = ({ request }) => {
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      borderRadius: 10,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
    media: {
      height: 0,
      paddingTop: "100%",
    },

    successColor: {
      backgroundColor: theme.palette.success.main,
      "&:hover": {
        background: theme.palette.success.secondary,
      },
    },
    errorColor: {
      backgroundColor: theme.palette.error.main,
      "&:hover": {
        background: theme.palette.error.secondary,
      },
    },
  }));

  const classes = useStyles();

  const users = useSelector((state) => state.authReducer.users);
  const requestby = users.find((_user) => _user.id === request.requstUserId);

  const books = useSelector((state) => state.bookReducer.books);

  const mybook = books.find((_book) => _book.id === request.bookId);

  const hisbook = request.Books.map((book) => book.name);

  return (
    <>
      {!request || request.status !== 0 ? (
        <>
          <Typography align="center" color="primary">
            You have no requests &nbsp;
          </Typography>
        </>
      ) : (
        <>
          <Grid
            item
            xs={4}
            sm={5}
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            style={{
              marginTop: "0.8em",
            }}
          >
            <Card
              className={classes.root}
              backgroundColor="secondary"
              spacing={3}
            >
              <Typography
                align="center"
                color="primary"
                variant="h6"
                style={{
                  marginTop: "0.8em",
                  marginBottom: "0.8em",
                }}
              >
                Requested by :{requestby.firstName}
              </Typography>
              <Divider />
              <Typography
                align="center"
                color="primary"
                variant="h6"
                style={{
                  marginTop: "0.8em",
                  marginBottom: "0.8em",
                }}
              >
                My Book :{mybook.name}
              </Typography>
              <Divider />
              <Typography
                align="center"
                color="primary"
                variant="h6"
                style={{
                  marginTop: "0.8em",
                  marginBottom: "0.8em",
                }}
              >
                His Book: {hisbook}
              </Typography>
              <Divider />
              <Grid
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing="0"
                style={{
                  marginTop: "0.8em",
                  marginBottom: "0.8em",
                }}
              >
                <Button
                  onClick={() => dispatch(acceptRequest(request.requstUserId))}
                  variant="contained"
                  className={classes.successColor}
                  endIcon={<CheckIcon></CheckIcon>}
                  style={{
                    marginTop: "0.8em",
                    marginBottom: "0.8em",
                    // marginRight: "4em",
                  }}
                >
                  Accpet
                </Button>
                <Button
                  onClick={() => dispatch(rejectRequest(request.requstUserId))}
                  variant="contained"
                  className={classes.errorColor}
                  endIcon={<CloseIcon></CloseIcon>}
                  style={{
                    marginTop: "0.8em",
                    marginBottom: "0.8em",
                    marginLeft: "2em",
                  }}
                >
                  Reject
                </Button>
              </Grid>
            </Card>
          </Grid>
        </>
      )}
    </>
  );
};

export default RequestItem;
