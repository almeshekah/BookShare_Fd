import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { register } from "../../serviceWorker";
//Actions
import { signup, updateProfile } from "../../store/actions/authActions";
//styling
import {
  FormStyled,
  LabelStyled,
  InputFieldStyled,
  FieldSetStyled,
  LegendStyled,
  FormAddButtonStyled,
} from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const profile = useSelector((state) => state.authReducer.profile);

  const [user, setUser] = useState(
    profile ?? {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      image: "",
    }
  );
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const eye = <FontAwesomeIcon icon={faEye} />;
  const { errors } = useForm();

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleImage = (event) => {
    setUser({ ...user, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (profile) {
      dispatch(updateProfile(user));
      history.replace("/");
    } else dispatch(signup(user, history));
  };

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <FormStyled>
        <form onSubmit={handleSubmit}>
          <FieldSetStyled>
            <LegendStyled>
              <h2>{profile ? "Update" : "Sign Up"}</h2>

              <LabelStyled>
                First Name :
                <InputFieldStyled
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                />
              </LabelStyled>

              <LabelStyled>
                Last Name :
                <InputFieldStyled
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                />
              </LabelStyled>

              <LabelStyled>
                Username:
                <InputFieldStyled
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                />
              </LabelStyled>
              {profile ? null : (
                <LabelStyled>
                  Password:
                  <span>
                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                  </span>
                  <InputFieldStyled
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    ref={register({ required: true, minLength: 8 })}
                  />
                  {errors.password && <p>Pass is required!!</p>}
                </LabelStyled>
              )}

              <LabelStyled>
                Image:
                <InputFieldStyled
                  type="file"
                  name="image"
                  onChange={handleImage}
                />
              </LabelStyled>
              <LabelStyled>
                Email:
                <InputFieldStyled
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </LabelStyled>

              <FormAddButtonStyled onSubmit={handleSubmit}>
                {profile ? "Update" : "Sign Up"}
              </FormAddButtonStyled>
            </LegendStyled>
          </FieldSetStyled>
        </form>
      </FormStyled>
    </>
  );
};

export default Signup;
