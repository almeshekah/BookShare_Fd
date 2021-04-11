import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

//Material-ui
import Typography from "@material-ui/core/Typography";

//Components
import CategoriesSelect from "./CategoriesSelect";
import { register } from "../../serviceWorker";

//Actions
import { signup, updateProfile } from "../../store/actions/authActions";

//Styling
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
  const userCondition = useSelector((state) => state.authReducer.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const profile = useSelector((state) => state.authReducer.profile);
  const categories = useSelector((state) => state.categoryReducer.categories);

  const [passwordShown, setPasswordShown] = useState(false);
  let [arr1, setArr1] = useState([]);
  const [options, setOptions] = useState([]);
  const [user, setUser] = useState(
    profile ?? {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      image: "",
      categories: "",
    }
  );

  const eye = <FontAwesomeIcon icon={faEye} />;
  const { errors } = useForm();

  const categoryOptionsList = categories.map((category) => ({
    value: category.id,
    label: `${category.name} `,
    name: "categoryId",
  }));

  const _handleOptions = (selectedOption) => {
    const categoryList = selectedOption.map((option) => option.value);
    setUser({ ...user, categories: categoryList });
    setArr1(categoryList);
  };

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
    } else {
      dispatch(signup({ ...user, categories: arr1 }, history));
    }
  };
  console.log(arr1);
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
              <LabelStyled>
                Interested categories:
                <CategoriesSelect
                  name="categories"
                  options={options}
                  _handleOptions={_handleOptions}
                  _options={categoryOptionsList}
                  set="categories"
                  isMulti={true}
                />
              </LabelStyled>
              <>
                {userCondition ? (
                  <>
                    <Typography></Typography>
                  </>
                ) : (
                  <Link style={{ textDecoration: "none" }} to={`/signin`}>
                    <Typography
                      variant="h6"
                      align="center"
                      color="primary"
                      style={{ marginTop: "0.5em", marginBottom: "1em" }}
                    >
                      Already a member? Sign In
                    </Typography>
                  </Link>
                )}
              </>
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
