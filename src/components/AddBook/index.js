import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

//Actions
import { createMyBook } from "../../store/actions/bookActions";

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
import SearchBar from "../SearchBar";

const AddBook = () => {
	const history = useHistory();

	const dispatch = useDispatch();

	const user = useSelector((state) => state.authReducer.user);

	const [book, setBook] = useState({
		userId: user.id,
		edition: "",
		typeOfCover: "",
		condition: "",
		typeOfExchange: "",
		bookId: 1,
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

	const handleCover = (selectedOption) => {
		console.log(selectedOption);
		setCover({
			...cover,
			typeOfCover: selectedOption.value,
		});
	};
	const handleBookCondition = (selectedOption) => {
		console.log(selectedOption);
		setBookCondition({
			...bookCondition,
			condition: selectedOption.value,
		});
	};
	const handleType = (selectedOption) => {
		console.log(selectedOption);
		setType({
			...type,
			typeOfExchange: selectedOption.value,
		});
	};

	const handleChange = (event) => {
		setBook({ ...book, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(
			createMyBook({
				...book,
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

							<LabelStyled>
								Name of Book :
								<SearchBar />
							</LabelStyled>

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
