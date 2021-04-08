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

//Styling
import IconButton from "@material-ui/core/IconButton";
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

		avatar: {},
	}));
	const classes = useStyles();
	return (
		<>
			<Grid item xs={4}>
				<Card className={classes.root} backgroundColor="secondary">
					{user && user.id === book.user.id ? (
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
										<DetailDialog bookId={book.books.id} />
									</IconButton>
								}
								title={book.books.name}
							/>
						</>
					) : (
						<>
							<CardHeader
								avatar={
									user ? (
										<Link to={`/otherprofile/${book.user.id}`}>
											<Avatar aria-label="book" className={classes.avatar}>
												R
											</Avatar>
										</Link>
									) : (
										<Link to={`/signin`}>
											<Avatar
												aria-label="book"
												className={classes.avatar}
											></Avatar>
										</Link>
									)
								}
								action={
									<IconButton aria-label="more">
										<DetailDialog bookId={book.books.id} />
									</IconButton>
								}
								title={book.books.name}
							/>
						</>
					)}
					<CardMedia
						className={classes.media}
						image={book.books.image}
						title={book.books.name}
					/>
					<CardContent>
						{book.typeOfExchange === "trade" ? (
							<>
								<Typography align="center" color="primary">
									Listed for {book.typeOfExchange}
									&nbsp;
									<FaIcons.FaExchangeAlt />
								</Typography>
							</>
						) : (
							<>
								<Typography align="center" color="primary">
									Listed for {book.typeOfExchange}
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
