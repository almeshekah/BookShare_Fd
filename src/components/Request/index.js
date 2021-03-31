import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../serviceWorker";

//Actions
import {
  createRequest,
  acceptRequest,
  rejectRequest,
} from "../../store/actions/requestActions";

//styling
import {
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../../styles";

const Request = () => {
  const user = useSelector((state) => state.authReducer.user);

  console.log("🚀 ~ file: index.js ~ line 27 ~ Request ~ user", user);

  const [request, setRequest] = useState({
    requstUserId: user.id,
    receivedUserId: "",
    bookId: "",
    status: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) =>
    setRequest({ ...request, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createRequest(request, history));
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
                Books :
                <InputFieldStyled
                  type="text"
                  name="firstName"
                  // value={user.firstName}
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
