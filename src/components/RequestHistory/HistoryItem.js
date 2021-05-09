import React from "react";

import { useSelector } from "react-redux";
import Moment from "moment";

const HistoryItem = ({ request }) => {
	const date = Moment(request.createdAt).format("DD-MM-YYYY");

	let status;
	if (request.status === 1) status = "ACCEPTED";
	else {
		status = "REJECTED";
	}

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
			<tr>
				<td>{requestby[0].user.firstName}</td>
				<td>{date}</td>
				<td>{_mybook}</td>
				<td>{hisbook}</td>
				<td>{status}</td>
				<td>{request.note}</td>
			</tr>
		</>
	);
};

export default HistoryItem;
