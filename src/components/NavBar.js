import React from "react";
import { signout } from "../store/actions/authActions";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { AuthButtonStyled } from "../styles";
const NavBar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);
  return (
    <>
      {user ? (
        <>
          <Link to="/">
            <AuthButtonStyled onClick={() => dispatch(signout())}>
              Sign out
            </AuthButtonStyled>
          </Link>
          <p>Welcome {user.username}</p>
        </>
      ) : (
        <>
          <Link to="/signup">
            <AuthButtonStyled>Sign up</AuthButtonStyled>
          </Link>
          <Link to="/signin">
            <AuthButtonStyled>Sign in</AuthButtonStyled>
          </Link>
        </>
      )}
    </>
  );
};

export default NavBar;
