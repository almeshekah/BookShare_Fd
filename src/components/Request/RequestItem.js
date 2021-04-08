import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Material-Ui
import Typography from "@material-ui/core/Typography";
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

  const mybook = useSelector((state) => state.bookReducer.mybook);
  const requestby = mybook.filter(
    (book) => book.userId == request.requstUserId
  );

  const books = useSelector((state) => state.bookReducer.books);

  const _mybook = mybook
    .filter((book) => book.userId == request.receivedUserId)
    .map((_book) => _book.books.name);

  const hisbook = mybook
    .filter((book) => book.userId == request.requstUserId)
    .map((_book) => _book.books.name);

  // console.log(
  //   "🚀 ~ file: RequestItem.js ~ line 108 ~ RequestItem ~ user",
  //   user
  // );

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
          <tr>
            {/* will check this it is not working */}
            <td>{requestby[0].user.firstName}</td>
            <td>{_mybook}</td>
            <td>{hisbook}</td>
            <td>
              <Button
                onClick={() => dispatch(acceptRequest(request.requstUserId))}
                variant="contained"
                className={classes.successColor}
                endIcon={<CheckIcon></CheckIcon>}
                style={{
                  marginTop: "0.8em",
                  marginBottom: "0.8em",
                }}
              >
                Accpet
              </Button>
            </td>
            <td>
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
            </td>
          </tr>
        </>
      )}
    </>
  );
};

export default RequestItem;
