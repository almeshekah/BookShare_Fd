import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import DetailDialog from "./DetailDialog";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import MoreIcon from "@material-ui/icons/More";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

import { useDispatch } from "react-redux";

import { viewProfile } from "../../store/actions/authActions";

//Styles
import { makeStyles } from "@material-ui/core/styles";

const BookItem = ({ book }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    dispatch(viewProfile(book.userId));
  });

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
  const dispatch = useDispatch();

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
                <Link to="/otherprofile">
                  <Avatar aria-label="book" className={classes.avatar}>
                    R
                  </Avatar>
                </Link>
              }
              action={
                <IconButton aria-label="more">
                  <Link to={`/books/${book.slug}`}>
                    <MoreIcon />
                  </Link>
                  <DetailDialog />
                </IconButton>
              }
              title={book.name}
              subheader={book.author}

              // onClick={() => alert("Hello from here")}
            />
            {/* <Typography align="left">Deatils</Typography> */}

            <CardMedia
              className={classes.media}
              image={book.image}
              title={book.name}
              onClick={() => setProfile(profile)}
              // onClick={() => dispatch(viewProfile(book.userId))}
            />
            <CardContent>Listed for {book.type}</CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default BookItem;
