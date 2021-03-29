import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";

//Styling
import { makeStyles } from "@material-ui/core/styles";

const BookItem = ({ book }) => {
  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 345,
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
      <Grid
        container
        spacing={5}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="book" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="more">
                  <Link to={`/books/${book.slug}`}>
                    <MoreVertIcon />
                  </Link>
                </IconButton>
              }
              title={book.name}
              subheader={book.author}
            />

            <CardMedia
              className={classes.media}
              image={book.image}
              title={book.name}
            />

            <CardContent>Listed for {book.type}</CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default BookItem;
