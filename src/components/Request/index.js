import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//Components
import BookMultiSelect from "./BookMultiSelect";

//Actions
import { createRequest } from "../../store/actions/requestActions";

//Styling
import {
	FormStyled,
	LabelStyled,
	FieldSetStyled,
	LegendStyled,
	InputFieldStyled,
	FormAddButtonStyled,
} from "../../styles";
import Loading from "../Loading";

const Request = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	let [arr1, setArr1] = useState([]);
	let [arr2, setArr2] = useState([]);

	const mybook = useSelector((state) => state.bookReducer.mybook);
	const user = useSelector((state) => state.authReducer.user);
	const _mybook = mybook.filter((book) => user.id === book.userId);

	const otheProfile = useSelector((state) => state.authReducer.otheProfile);
	const otheProfileloading = useSelector(
		(state) => state.authReducer.otheProfileloading
	);
	const hisbook = mybook.filter((book) => otheProfile.userId === book.userId);

	const [books, setBooks] = useState([]);
	const [bookId, setBookIds] = useState([]);

	const [request, setRequest] = useState({
		requstUserId: user.id,
		receivedUserId: otheProfile.userId,
		bookId: "",
		status: 0,
		books: "",
		note: "",
	});

	const [options, setOptions] = useState([]);

	const mybookOptionsList = _mybook.map((book) => ({
		value: book.id,
		label: `${book.books.name} `,
		name: "bookId",
	}));

	const otherBookOptionsList = hisbook.map((book) => ({
		value: book.id,
		label: `${book.books.name} `,
		name: "books",
	}));

	const _handleOptions = (selectedOption) => {
		const bookIdList = selectedOption.map((option) => option.value);
		setRequest({ ...request, bookId: bookIdList });

		setBooks(selectedOption);
		setArr1(bookIdList);
	};

	const handleChange = (event) =>
		setRequest({ ...request, [event.target.name]: event.target.value });

	const _handleOptions2 = (selectedOption2) => {
		const booksIdList = selectedOption2.map((option) => option.value);
		setRequest({ ...request, books: booksIdList });
		setArr2(booksIdList);
		setBookIds(selectedOption2);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(
			createRequest({
				...request,
				bookId: arr1,
				books: arr2,
			})
		);
		history.replace("/");
	};

	if (otheProfileloading) return <Loading />;
	return (
		<>
			<Helmet>
				<title>Request</title>
			</Helmet>
			<FormStyled>
				<form onSubmit={handleSubmit}>
					<FieldSetStyled>
						<LegendStyled>
							<h2>Make a Request</h2>

							<LabelStyled>
								My Books:
								<BookMultiSelect
									name="bookId"
									options={options}
									_handleOptions={_handleOptions}
									_options={mybookOptionsList}
									set="bookId"
									isMulti={true}
								/>
							</LabelStyled>

							<LabelStyled>
								{otheProfile.firstName} {otheProfile.lastName} Books:
								<BookMultiSelect
									name="books"
									options={options}
									_handleOptions={_handleOptions2}
									_options={otherBookOptionsList}
									set="books"
									isMulti={true}
								/>
							</LabelStyled>
							<LabelStyled>
								Add Your Notes
								<InputFieldStyled
									type="text"
									name="note"
									value={request.note}
									onChange={handleChange}
								/>
							</LabelStyled>
							<FormAddButtonStyled onSubmit={handleSubmit}>
								Send a Request
							</FormAddButtonStyled>
						</LegendStyled>
					</FieldSetStyled>
				</form>
			</FormStyled>
		</>
	);
};

export default Request;
