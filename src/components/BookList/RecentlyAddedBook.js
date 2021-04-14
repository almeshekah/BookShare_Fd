//Material-Ui
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//Styling
import { makeStyles } from "@material-ui/core/styles";

const RecentlyAddedBook = ({ book }) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			width: 300,
			height: 300,
			borderRadius: 10,
			color: theme.palette.primary.main,
		},
		media: {
			width: 150,
			height: 200,
			borderRadius: 10,
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
