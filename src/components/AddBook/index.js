import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { register } from "../../serviceWorker";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loading from "../Loading";
import { createBook } from "../../store/actions/bookActions";
//styling
import {
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../../styles";

const AddBook = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { userId, bookId } = useParams();

  const foundBook = useSelector((state) =>
    state.bookReducer.books.find((book) => book.id === +bookId)
  );

  // const user = useSelector((state) => state.authReducer.user);

  const [book, setBook] = useState(
    foundBook
      ? foundBook
      : {
          userId: userId,
          name: "",
          author: "",
          type: "",
          image: "",
        }
  );

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setBook({ ...book, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBook(book, history));
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
                <InputFieldStyled
                  type="text"
                  name="type"
                  value={book.type}
                  onChange={handleChange}
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
