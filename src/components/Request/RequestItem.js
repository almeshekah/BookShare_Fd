import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { acceptRequest } from '../../store/actions/requestActions';
import { rejectRequest } from '../../store/actions/requestActions';
const RequestItem = ({ request }) => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.authReducer.users);
	const requestby = users.find((_user) => _user.id === request.requstUserId);
	const books = useSelector((state) => state.bookReducer.books);
	const hisbook = books.find((_book) => _book.id === request.bookId);

	return (
		<tr>
			<td>{requestby.firstName}</td>
			<td>{}</td>
			<td>{hisbook.name}</td>
			<td>
				<button onClick={() => dispatch(acceptRequest(request.requstUserId))}>
					Accpet
				</button>
			</td>
			<td>
				<button onClick={() => dispatch(rejectRequest(request.requstUserId))}>
					Recjet
				</button>
			</td>
		</tr>
	);
};

export default RequestItem;
