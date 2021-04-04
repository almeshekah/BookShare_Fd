import { Link } from "react-router-dom";
import DetailDialog from "./DetailDialog";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";

import Grid from "@material-ui/core/Grid";

//Styles
import { makeStyles } from "@material-ui/core/styles";

const BookItem = ({ book }) => {
  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 250,
    },
    media: {
      height: 0,
      paddingTop: "100%",
    },

    avatar: {
      backgroundColor: red[500],
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Link to={`/otherprofile/${book.userId}`}>
                <Avatar aria-label="book" className={classes.avatar}>
                  R
                </Avatar>
              </Link>
            }
            action={
              <IconButton aria-label="more">
                <DetailDialog bookId={book.id} />
              </IconButton>
            }
            title={book.name}
          />

          <CardMedia
            className={classes.media}
            image={book.image}
            title={book.name}
          />
          <CardContent>Listed for {book.type}</CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default BookItem;
