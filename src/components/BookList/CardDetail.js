import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

// Styling
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const CardDetail = ({ bookId }) => {
	const books = useSelector((state) => state.bookReducer.books);

	const book = books.find((book) => book.id === bookId);

	const useStyles = makeStyles({
		root: {
			maxWidth: 500,
		},
		media: {
			height: 500,
		},
	});

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
				style={{ minHeight: '100vh' }}
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
									<Typography gutterBottom variant="h6" component="h2">
										Book Name: {book.name}
									</Typography>
									<Typography gutterBottom variant="h6" component="h2">
										Author: {book.author}
									</Typography>
									<Typography gutterBottom variant="h6" component="h2">
										Type: {book.type}
									</Typography>
									<Typography gutterBottom variant="h6" component="h2">
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
