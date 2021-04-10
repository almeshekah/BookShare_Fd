import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import DetailDialog from "./DetailDialog";

//Material-Ui
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
// import Divider from "@material-ui/core/Divider";

//Styling
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const RecentlyAddedBook = ({ book }) => {
  const user = useSelector((state) => state.authReducer.user);

  const profile = useSelector((state) => state.authReducer.profile);
  const otheProfile = useSelector((state) => state.authReducer.otheProfile);

  const useStyles = makeStyles((theme) => ({
    root: {
      // width: 170,
      // height: 230,
      width: 300,
      height: 300,
      borderRadius: 10,
      // backgroundColor: "#ffff00",
      // backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
    media: {
      width: 150,
      height: 200,
      borderRadius: 10,
    },

    icons: {
      // marginTop: "-1em",
      // marginLeft: "2em",
    },
    bookTitle: {
      marginTop: "0.3em",
      marginBottom: "1.3em",
    },
    bookAuthor: {
      marginTop: "-1.7em",
    },

    avatar: {
      marginTop: "0.3em",
    },
    userName: {
      marginLeft: "3em",
      marginTop: "-2em",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Grid item xs={2}>
        <Card className={classes.root} style={{ boxShadow: "none" }}>
          <>
            <CardContent>
              {/* <CardHeader
                  action={
                    <IconButton aria-label="more">
                      <DetailDialog bookId={book.books.id} mybook={book} />
                    </IconButton>
                  }
                /> */}
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <CardMedia className={classes.media} image={book.books.image} />
              </Grid>

              <>
                <Typography
                  variant="h6"
                  className={classes.bookTitle}
                  align="center"
                >
                  {book.books.name}
                </Typography>

                <Typography className={classes.bookAuthor} align="center">
                  {book.books.author}
                </Typography>
                <CardContent>
                  <></>
                </CardContent>
              </>
            </CardContent>
          </>
          <>
            <CardContent>
              {/* <CardHeader
                action={
                  <IconButton className={classes.icons} aria-label="more">
                    <DetailDialog bookId={book.books.id} mybook={book} />
                  </IconButton>
                }
              /> */}
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <CardMedia className={classes.media} image={book.books.image} />
              </Grid>

              <>
                <Typography variant="h6" className={classes.bookTitle}>
                  {book.books.name}
                </Typography>

                <Typography className={classes.bookAuthor}>
                  by {book.books.author}
                </Typography>
              </>
            </CardContent>
          </>
        </Card>
      </Grid>
    </>
  );
};

export default RecentlyAddedBook;
