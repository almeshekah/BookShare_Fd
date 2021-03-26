import { Nav, NavLink, NavMenu, UsernameStyled } from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signout, profile } from "../../store/actions/authActions";
import { fetchCategory } from "../../store/actions/categoryActions";

const Navbar = () => {
  const history = useHistory();
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink onClick={() => dispatch(fetchCategory)} to="categories">
            Categories
          </NavLink>

          {user && (
            <NavLink onClick={() => dispatch(profile(user.id))} to="profile">
              Profile
            </NavLink>
          )}
          {user ? (
            <>
              <UsernameStyled>Welcome , {user.username}! </UsernameStyled>
              <NavLink activeStyle onClick={() => dispatch(signout(history))}>
                Signout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signup">Signup</NavLink>
              <NavLink to="/signin">Signin</NavLink>
            </>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
