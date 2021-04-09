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
import Divider from "@material-ui/core/Divider";

//Styling
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

const BookItem = ({ book }) => {
	const user = useSelector((state) => state.authReducer.user);

	const profile = useSelector((state) => state.authReducer.profile);

	const useStyles = makeStyles((theme) => ({
		root: {
			width: 455,
			height: 260,
			borderRadius: 5,
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.primary.main,
		},
		media: {
			width: 150,
			height: 230,
			marginLeft: "1em",
			marginBottom: "-10em",
		},
		divider: {
			background: theme.palette.primary.main,
			marginTop: "3em",
		},
		icons: {
			marginTop: "-1em",
			marginLeft: "2em",
		},
		bookTitle: {
			marginTop: "-3em",
			marginLeft: "7em",
			marginBottom: "1em",
		},
		bookAuthor: {
			marginTop: "-1.7em",
			marginLeft: "10.5em",
			marginBottom: "1em",
		},
		bookType: {
			marginTop: "2em",
			marginLeft: "9.5em",
		},

		bookTypeIcons: {
			marginLeft: "0.5em",
		},

		avatar: {
			marginTop: "0.5em",
		},
		userName: {
			marginLeft: "3em",
			marginTop: "-2em",
		},
	}));
	const classes = useStyles();
	return (
		<>
			<Grid item xs={5}>
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="flex-start"
				>
					<CardMedia className={classes.media} image={book.books.image} />
				</Grid>
				<Card className={classes.root} backgroundColor="secondary">
					{user && user.id === book.user.id ? (
						<>
							<CardContent>
								<CardHeader
									action={
										<IconButton aria-label="more">
											<DetailDialog bookId={book.books.id} mybook={book} />
										</IconButton>
									}
								/>
								<>
									<Typography variant="h5" className={classes.bookTitle}>
										{book.books.name}
									</Typography>

									<Typography className={classes.bookAuthor}>
										by {book.books.author}
									</Typography>
									<CardContent>
										{book.typeOfExchange === "trade" ? (
											<>
												<Typography
													className={classes.bookType}
													color="primary"
												>
													Listed for {book.typeOfExchange}
													<FaIcons.FaExchangeAlt
														className={classes.bookTypeIcons}
													/>
												</Typography>
												<Divider className={classes.divider} />
												<Link to={`/profile`}>
													<Avatar
														aria-label="user"
														src={profile.image}
														alt={user.firstName}
														className={classes.avatar}
													/>
												</Link>
												<Typography className={classes.userName}>
													{user.firstName} {user.lastName}
												</Typography>
											</>
										) : (
											<>
												<Typography
													className={classes.bookType}
													color="primary"
												>
													Listed for {book.typeOfExchange}
													<BsIcons.BsGiftFill
														className={classes.bookTypeIcons}
													/>
												</Typography>
												<Divider className={classes.divider} />

												<Link to={`/profile`}>
													<Avatar
														aria-label="book"
														src={profile.image}
														alt={user.firstName}
														className={classes.avatar}
													/>
												</Link>
											</>
										)}
									</CardContent>
								</>
							</CardContent>
						</>
					) : (
						<>
							<CardContent>
								<CardHeader
									// avatar={
									//   user ? (
									//     <Link to={`/otherprofile/${book.userId}`}>
									//       <Avatar aria-label="book" className={classes.avatar}>
									//         R
									//       </Avatar>
									//     </Link>
									//   ) : (
									//     <Link to={`/signin`}>
									//       <Avatar
									//         aria-label="book"
									//         className={classes.avatar}
									//       ></Avatar>
									//     </Link>
									//   )
									// }
									action={
										<IconButton className={classes.icons} aria-label="more">
											<DetailDialog bookId={book.books.id} mybook={book} />
										</IconButton>
									}
								/>

								<>
									{/* Book info */}
									{/* <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                   style={{
                    marginTop: "-3em",
                    marginLeft: "3em",
                     marginBottom: "1em",
                   }}
                > */}

									<Typography variant="h5" className={classes.bookTitle}>
										{book.books.name}
									</Typography>

									<Typography className={classes.bookAuthor}>
										by {book.author}
									</Typography>
									<CardContent>
										{book.typeOfExchange === "trade" ? (
											<>
												<Typography
													className={classes.bookType}
													color="primary"
												>
													Listed for {book.typeOfExchange}
													<FaIcons.FaExchangeAlt
														className={classes.bookTypeIcons}
													/>
												</Typography>
												<Divider className={classes.divider} />
												{user ? (
													<Link to={`/otherprofile/${book.userId}`}>
														<Avatar
															aria-label="book"
															// src={otheProfile.image}
															className={classes.avatar}
														>
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
												)}
											</>
										) : (
											<>
												<Typography
													className={classes.bookType}
													color="primary"
												>
													Listed for {book.typeOfExchange}
													<BsIcons.BsGiftFill
														className={classes.bookTypeIcons}
													/>
												</Typography>
												<Divider className={classes.divider} />
												{user ? (
													<Link to={`/otherprofile/${book.userId}`}>
														<Avatar
															aria-label="book"
															// src={otheProfile.image}
															className={classes.avatar}
														>
															R
														</Avatar>
													</Link>
												) : (
													<Link to={`/signin`}>
														<Avatar
															aria-label="book"
															className={classes.avatar}
														></Avatar>
														<Typography
															className={classes.userName}
														></Typography>
													</Link>
												)}
											</>
										)}
									</CardContent>
								</>
							</CardContent>
						</>
					)}
				</Card>
			</Grid>
		</>
	);
};

export default BookItem;
