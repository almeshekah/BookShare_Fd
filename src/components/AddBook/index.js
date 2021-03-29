import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
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

const AddBook = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { userId } = useParams();

  const [book, setBook] = useState({
    userId: userId,
    name: "",
    author: "",
    type: "",
    image: "",
  });

  const [options, setOptions] = useState({
    trade: null,
    giveaway: null,
  });

  const handleOptions = (selectedOption) => {
    console.log(selectedOption);
    setOptions({ ...options, type: selectedOption.value });
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
