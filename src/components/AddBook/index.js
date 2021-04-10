import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import _ from "lodash";

//Material-Ui
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

//Actions
import { createMyBook, searchBook } from "../../store/actions/bookActions";

//Styling
import {
	FormStyled,
	LabelStyled,
	InputFieldStyled,
	FieldSetStyled,
	LegendStyled,
	FormAddButtonStyled,
} from "../../styles";

//Components
import TypeSelect from "./TypeSelect";
import CategorySelect from "./CategorySelect";
import TypeOfCoverSelect from "./TypeOfCoverSelect";
import ConditionSelect from "./ConditionSelect";

const AddBook = () => {
	const history = useHistory();

	const dispatch = useDispatch();

	const user = useSelector((state) => state.authReducer.user);
	const search = useSelector((state) => state.bookReducer.booksearsh);

	const [book, setBook] = useState({
		userId: user.id,
		edition: "",
		typeOfCover: "",
		condition: "",
		typeOfExchange: "",
		bookId: "",
	});

	const [cover, setCover] = useState({
		hardcover: null,
		paperback: null,
		masspaperback: null,
	});
	const [bookCondition, setBookCondition] = useState({
		good: null,
		likenew: null,
		acceptable: null,
	});
	const [type, setType] = useState({
		trade: null,
		giveaway: null,
	});

	// Search term
	const [searchTerm, setSearchTerm] = useState([]);

	// Searching status (whether there is pending API request)
	const [isSearching, setIsSearching] = useState(false);

	const [autocomplete, setAuto] = useState(null);

	const debounceSearch = useRef(
		_.debounce((searchTerm) => {
			dispatch(searchBook(searchTerm));
		}, 1000)
	);

	useEffect(
		() => {
			if (searchTerm) {
				setIsSearching(true);

				debounceSearch.current(searchTerm);
			}
		},
		[searchTerm] // Only call effect if debounced search term changes
	);

	const handleCover = (selectedOption) => {
		console.log(selectedOption);
		setCover({
			...cover,
			typeOfCover: selectedOption.value,
		});
	};
	const handleBookCondition = (selectedOption) => {
		setBookCondition({
			...bookCondition,
			condition: selectedOption.value,
		});
	};
	const handleType = (selectedOption) => {
		setType({
			...type,
			typeOfExchange: selectedOption.value,
		});
	};

	const handleChange = (event) => {
		setBook({ ...book, [event.target.name]: event.target.value });
	};
	const handleAutocomplete = (event, newValue) => {
		if (newValue != null) {
			setAuto(newValue);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(
			createMyBook({
				...book,
				bookId: autocomplete.id,
				typeOfExchange: type.typeOfExchange,
				condition: bookCondition.condition,
				typeOfCover: cover.typeOfCover,
			})
		);
		history.replace("/");
	};

	return (
		<>
			<Helmet>
				<title>Add Book</title>
			</Helmet>
			<FormStyled>
				<form onSubmit={handleSubmit}>
					<FieldSetStyled>
						<LegendStyled>
							<h2>New Book</h2>
							Name of Book :
							<Autocomplete
								id="combo-box-demo"
								name="bookId"
								options={search}
								getOptionLabel={(option) => option.name}
								style={{ width: 300 }}
								onChange={handleAutocomplete}
								set="bookId"
								renderInput={(params) => (
									<TextField
										{...params}
										label="Combo box"
										variant="outlined"
										onChange={(e) => setSearchTerm(e.target.value)}
									/>
								)}
							/>
							<LabelStyled>
								Edition:
								<InputFieldStyled
									type="text"
									name="edition"
									value={book.edition}
									onChange={handleChange}
								/>
							</LabelStyled>
							<LabelStyled>
								Type:
								<TypeSelect
									name="typeOfExchange"
									options={type}
									handleOptions={handleType}
								/>
							</LabelStyled>
							<LabelStyled>
								Type Of Cover:
								<TypeOfCoverSelect
									name="typeOfCover"
									options={cover}
									handleOptions={handleCover}
								/>
							</LabelStyled>
							<LabelStyled>
								Condition:
								<ConditionSelect
									name="condition"
									options={bookCondition}
									handleOptions={handleBookCondition}
								/>
							</LabelStyled>
							<FormAddButtonStyled onSubmit={handleSubmit}>
								New Book
							</FormAddButtonStyled>
						</LegendStyled>
					</FieldSetStyled>
				</form>
			</FormStyled>
		</>
	);
};

export default AddBook;
