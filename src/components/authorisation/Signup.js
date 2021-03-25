import { useState } from "react";
import { signup } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AuthForm } from "./styles";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const [show, setShow] = useState("password");

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <AuthForm className="col-md-6">
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            required
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            required
            name="firstName"
            value={user.firstName}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            required
            name="lastName"
            value={user.lastName}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            required
            name="password"
            value={user.password}
            type={show}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            required
            name="email"
            value={user.email}
            type="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={() => setShow(show === "password" ? "text" : "password")}
          />
          <label className="form-check-label">show password</label>
        </div>
        <button className="btn float-right" type="submit">
          Sign up
        </button>
      </form>
      <Link to="/signin">
        <p>Already have an Account?</p>
      </Link>
    </AuthForm>
  );
};

export default Signup;
