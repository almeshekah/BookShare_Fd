import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

//Material-Ui
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

// Styling
import { makeStyles } from "@material-ui/core/styles";

const CardDetail = ({ bookId }) => {
  const books = useSelector((state) => state.bookReducer.books);

  const book = books.find((book) => book.id === bookId);

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
      borderRadius: 15,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },

    media: {
      height: 500,
      width: 500,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>{book.name}</title>
      </Helmet>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={book.image}
                title={book.name}
              />
              <CardContent>
                <>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    align="center"
                  >
                    Book Name: {book.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    align="center"
                  >
                    Author: {book.author}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    align="center"
                  >
                    Type: {book.type}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    align="center"
                  >
                    Category: {book.category.name}
                  </Typography>
                </>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CardDetail;
