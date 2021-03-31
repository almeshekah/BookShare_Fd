import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import BookSelect from "./BookSelect";

//Actions
import { createRequest } from "../../store/actions/requestActions";

//styles
import {
  FormStyled,
  LabelStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../../styles";
import Loading from "../Loading";

const Request = () => {
  const user = useSelector((state) => state.authReducer.user);
  const users = useSelector((state) => state.authReducer.users);
  console.log("🚀 ~ file: index.js ~ line 23 ~ Request ~ users", users);
  const otheProfile = useSelector((state) => state.authReducer.otheProfile);
  const otheProfileloading = useSelector(
    (state) => state.authReducer.otheProfileloading
  );

  const requser = users.find((_user) => _user.id === user.id);
  console.log(requser);

  const [request, setRequest] = useState({
    requstUserId: user.id,
    receivedUserId: otheProfile.userId,
    bookId: "",
    status: 0,
    books: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const [options, setOptions] = useState({
    bookId: null,
    books: null,
  });

  const mybookOptionsList = requser.mybooks.map((book) => ({
    value: book.id,
    label: `${book.name} `,
    name: "bookId",
  }));
  if (otheProfileloading) return <Loading />;
  const otherBookOptionsList = otheProfile.hasbook.map((book) => ({
    value: book.id,
    label: `${book.name} `,
    name: "books",
  }));

  const _handleOptions = (selectedOption) => {
    setOptions({
      ...options,
      [selectedOption.name]: selectedOption,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createRequest({
        ...request,
        books: options.books.value,
        bookId: options.bookId.value,
      })
    );
    history.replace("/");
  };
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
                <BookSelect
                  name="bookId"
                  options={options}
                  _handleOptions={_handleOptions}
                  _options={mybookOptionsList}
                  set="bookId"
                />
              </LabelStyled>
              <LabelStyled>
                {otheProfile.firstName} {otheProfile.lastName} Books:
                <BookSelect
                  name="books"
                  options={options}
                  _handleOptions={_handleOptions}
                  _options={otherBookOptionsList}
                  set="books"
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
