import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Moment from "moment";
//Material-Ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Actions
import { acceptRequest } from "../../store/actions/requestActions";
import { rejectRequest } from "../../store/actions/requestActions";

//Styling
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const RequestItem = ({ request }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const useStyles = makeStyles((theme) => ({
		root: {
			maxWidth: 400,
			borderRadius: 10,
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
	const date = Moment(request.createdAt).format("DD-MM-YYYY");

	const classes = useStyles();

	const mybook = useSelector((state) => state.bookReducer.mybook);
	const allbook = request.MyBooks;
	const requestby = mybook.filter(
		(book) => book.userId === request.requstUserId
	);

	const _mybook = allbook
		.filter((book) => book.userId === request.receivedUserId)
		.map((_book) => _book.books.name);

	const hisbook = allbook
		.filter((book) => book.userId === request.requstUserId)
		.map((_book) => _book.books.name);

	return (
		<>
			{!request || request.status !== 0 ? (
				<>
					<Typography
						align="center"
						color="primary"
						style={{ marginTop: "1em" }}
					>
						You have no requests
					</Typography>
				</>
			) : (
				<>
					<tr>
						<td>{requestby[0].user.firstName}</td>
						<td>{date}</td>
						<td>{_mybook}</td>
						<td>{hisbook}</td>

						<td>
							<Button
								onClick={() =>
									dispatch(acceptRequest(request.requstUserId, history))
								}
								variant="contained"
								className={classes.successColor}
								endIcon={<CheckIcon></CheckIcon>}
								style={{
									marginTop: "0.8em",
									marginBottom: "0.8em",
								}}
							>
								Accpet
							</Button>
						</td>
						<td>
							<Button
								onClick={() => dispatch(rejectRequest(request.requstUserId))}
								variant="contained"
								className={classes.errorColor}
								endIcon={<CloseIcon></CloseIcon>}
								style={{
									marginTop: "0.8em",
									marginBottom: "0.8em",
									marginLeft: "2em",
								}}
							>
								Reject
							</Button>
						</td>
						<td>{request.note}</td>
					</tr>
				</>
			)}
		</>
	);
};

export default RequestItem;
