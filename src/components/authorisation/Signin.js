import { useState } from "react";
import { signin } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };

  const [show, setShow] = useState("password");

  return (
    <div className="container">
      <h3>Sign in</h3>
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
          Sign in
        </button>
      </form>
      <Link to="/signup">
        <p>Create an Account?</p>
      </Link>
    </div>
  );
};

export default Signin;
