import { useState } from "react";
import { signup } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
    return (
      <div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
    );
  };

  return (
    <div className="container">
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
          <label>Password</label>
          <input
            required
            name="password"
            value={user.password}
            type="password"
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
        {/* <div class="form-check">
          <label>Type: </label><br></br>
          <input class="form-check-input" 
          type="radio" name="flexRadioDefault" 
          id="flexRadioDefault1"
          onChange={handleChange}/>
          <label class="form-check-label" for="flexRadioDefault1">
           Admin
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
             type="radio" name="flexRadioDefault"
             id="flexRadioDefault2" checked
             onChange={handleChange}/>
            <label class="form-check-label" for="flexRadioDefault2">
              User
            </label>
          </div> */}
        <button className="btn float-right" type="submit">
          Sign up
        </button>
      </form>
      <Link to="/signin">
        <p>Already have an Account?</p>
      </Link>
    </div>
  );
};

export default Signup;
