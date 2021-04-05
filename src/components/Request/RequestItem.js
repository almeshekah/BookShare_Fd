import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Material-Ui
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

//Actions
import { acceptRequest } from "../../store/actions/requestActions";
import { rejectRequest } from "../../store/actions/requestActions";

//Styling
import { makeStyles } from "@material-ui/core/styles";

const RequestItem = ({ request }) => {
	const dispatch = useDispatch();
	const useStyles = makeStyles((theme) => ({
		root: {
			maxWidth: 400,
			borderRadius: 15,
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.primary.main,
		},
		media: {
			height: 0,
			paddingTop: "100%",
		},

		successColor: {
			backgroundColor: theme.palette.success.main,
			"&:hover": {
				background: theme.palette.success.secondary,
			},
		},
		errorColor: {
			backgroundColor: theme.palette.error.main,
			"&:hover": {
				background: theme.palette.error.secondary,
			},
		},
	}));

	const classes = useStyles();

	const users = useSelector((state) => state.authReducer.users);
	const requestby = users.find((_user) => _user.id === request.requstUserId);

	const books = useSelector((state) => state.bookReducer.books);

	const mybook = books.find((_book) => _book.id === request.bookId);

	const hisbook = request.Books.map((book) => book.name);

	return (
		<>
			{!request || request.status !== 0 ? (
				<>
					<Typography align="center" color="primary">
						You have no requests &nbsp;
					</Typography>
				</>
			) : (
				<>
					<Grid
						item
						xs={6}
						direction="column"
						justify="flex-start"
						alignItems="flex-start"
					>
						<Card
							className={classes.root}
							backgroundColor="secondary"
							spacing={3}
						>
							<Typography align="center" color="primary" variant="h6">
								Requested by :{requestby.firstName}
							</Typography>
							&nbsp;
							<Divider />
							<Typography align="center" color="primary" variant="h6">
								My Book :{mybook.name}
							</Typography>
							&nbsp;
							<Divider />
							<Typography align="center" color="primary" variant="h6">
								His Book: {hisbook}
							</Typography>
							&nbsp;
							<Divider />
							&nbsp;
							<Grid
								item
								container
								direction="row"
								justify="center"
								alignItems="center"
								spacing="0"
							>
								<Button
									onClick={() => dispatch(acceptRequest(request.requstUserId))}
									variant="contained"
									className={classes.successColor}
								>
									Accpet
								</Button>
								&nbsp;
								<Button
									onClick={() => dispatch(rejectRequest(request.requstUserId))}
									variant="contained"
									className={classes.errorColor}
								>
									Recjet
								</Button>
							</Grid>
							&nbsp;
						</Card>
					</Grid>
				</>
			)}
		</>
	);
};

export default RequestItem;
