
import { Link } from "react-router-dom";
import DetailDialog from "./DetailDialog";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";

import Grid from "@material-ui/core/Grid";
import { useSelector } from 'react-redux';
//Styles
import { makeStyles } from "@material-ui/core/styles";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

const BookItem = ({ book }) => {
const user = useSelector((state) => state.authReducer.user);
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 250,
      borderRadius: 15,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
    media: {
      height: 0,
      paddingTop: "100%",
    },

    avatar: {
      // backgroundColor: red[500],
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Grid item xs={3}>
        <Card className={classes.root} backgroundColor="secondary">
          {user.id === book.userId ? (
						<>
							<CardHeader
								avatar={
									<Link to={`/profile`}>
										<Avatar
											aria-label="book"
											src={user.image}
											alt={user.firstName}
										></Avatar>
									</Link>
								}
								action={
									<IconButton aria-label="more">
										<DetailDialog bookId={book.id} />
									</IconButton>
								}
								title={book.name}
							/>
						</>
					) : (
						<>
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
						</>
					)}

          <CardMedia
            className={classes.media}
            image={book.image}
            title={book.name}
          />
          <CardContent>
            {book.type === "trade" ? (
              <>
                <Typography align="center" color="primary">
                  Listed for {book.type}
                  &nbsp;
                  <FaIcons.FaExchangeAlt />
                </Typography>
              </>
            ) : (
              <>
                <Typography align="center" color="primary">
                  Listed for {book.type}
                  &nbsp;
                  <BsIcons.BsGiftFill />
                </Typography>
              </>
            )}
          </CardContent>
        </Card>
      </Grid>
    </>
  );

};

export default BookItem;
