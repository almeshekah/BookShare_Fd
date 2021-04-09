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

const CardDetail = ({ bookId, mybook }) => {
	const books = useSelector((state) => state.bookReducer.books);

	const book = books.find((book) => book.id === bookId);

	const useStyles = makeStyles((theme) => ({
		root: {
			width: 500,
			height: 500,
			borderRadius: 15,
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.primary.main,
		},

		media: {
			height: 300,
			width: 200,
			marginLeft: "9.5em",
			marginTop: "1em",
		},
	}));

	const classes = useStyles();

	return (
		<>
			{/* <Helmet>
        <title>{book.name}</title>
      </Helmet> */}
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
			>
				<Grid item xs={12}>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image={books.image}
								title={books.name}
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
										Type: {mybook.typeOfExchange}
									</Typography>
									<Typography
										gutterBottom
										variant="h6"
										component="h2"
										align="center"
									>
										Type Of Cover: {mybook.typeOfCover}
									</Typography>
									<Typography
										gutterBottom
										variant="h6"
										component="h2"
										align="center"
									>
										Edition: {mybook.edition}
									</Typography>
									<Typography
										gutterBottom
										variant="h6"
										component="h2"
										align="center"
									>
										Condition: {mybook.condition}
									</Typography>
									<Typography
										gutterBottom
										variant="h6"
										component="h2"
										align="center"
									>
										{/* Category: {book.category.name} */}
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
