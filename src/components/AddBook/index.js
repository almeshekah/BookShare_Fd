import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

//Actions
import { createBook } from "../../store/actions/bookActions";

//Styling
import {
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../../styles";

import TypeSelect from "./TypeSelect";
import CategorySelect from "./CategorySelect";

const AddBook = () => {
  const [book, setBook] = useState({
    userId: userId,
    name: "",
    author: "",
    type: "",
    categoryId: "",
    image: "",
  });

  const [options, setOptions] = useState({
    trade: null,
    giveaway: null,
    categoryId: null,
  });
  const history = useHistory();

  const dispatch = useDispatch();

  const { userId } = useParams();

  const categories = useSelector((state) => state.categoryReducer.categories);

  const categoryOptionsList = categories.map((category) => ({
    value: category.id,
    label: `${category.name} `,
    name: "categoryId",
  }));

  const handleOptions = (selectedOption) => {
    console.log(selectedOption);
    setOptions({
      ...options,
      type: selectedOption.value,
    });
  };

  const _handleOptions = (selectedOption) => {
    console.log(selectedOption);
    setOptions({
      ...options,
      [selectedOption.name]: selectedOption,
    });
  };

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setBook({ ...book, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createBook({
        ...book,
        type: options.type,
        categoryId: options.categoryId.value,
      })
    );
    history.replace("/profile");
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
                Name:
                <InputFieldStyled
                  type="text"
                  name="name"
                  value={book.name}
                  onChange={handleChange}
                />
              </LabelStyled>

              <LabelStyled>
                Author:
                <InputFieldStyled
                  type="text"
                  name="author"
                  value={book.author}
                  onChange={handleChange}
                />
              </LabelStyled>

              <LabelStyled>
                Type:
                <TypeSelect
                  name="type"
                  options={options}
                  handleOptions={handleOptions}
                />
              </LabelStyled>

              <LabelStyled>
                Book Category:
                <CategorySelect
                  name="category"
                  options={options}
                  _handleOptions={_handleOptions}
                  _options={categoryOptionsList}
                  set="categoryId"
                />
              </LabelStyled>

              <LabelStyled>
                Image:
                <InputFieldStyled
                  type="file"
                  name="image"
                  onChange={handleImage}
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
