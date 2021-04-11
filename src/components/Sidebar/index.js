import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//Material Ui
import clsx from "clsx";
import Badge from "@material-ui/core/Badge";
import { IconContext } from "react-icons/lib";
import { Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

//Actions
import { signout } from "../../store/actions/authActions";
import { fetchCategory } from "../../store/actions/categoryActions";
import { fetchBook } from "../../store/actions/bookActions";

//Styling
import {
  Nav,
  NavItmes,
  NavItmes2,
  UsernameStyled,
  NavIcon,
  SidebarNav,
  SidebarWrap,
  SidebarLink,
  SidebarLabel,
  LogoStyled,
} from "./styles";
import * as FaIcons from "react-icons/fa";
import InfoIcon from "@material-ui/icons/Info";
import * as AiIcons from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/images/Logo.png";
import BookShareText from "../../assets/images/BookShareText.png";

const Sidebar = () => {
  const useStyles = makeStyles((theme) => ({
    avatar: {
      marginLeft: "-0.3em",
      marginBottom: "0.3em",
    },
    userName: {
      marginLeft: "3em",
      marginTop: "-2em",
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    badgeMargin: {},
  }));
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const [sidebar, setSidebar] = useState(false);
  const [subnav, setSubnav] = useState(false);

  const user = useSelector((state) => state.authReducer.user);
  const profile = useSelector((state) => state.authReducer.profile);
  const requests = useSelector((state) => state.requestReducer.requests);

  const pendingRequests = requests
    .map((request) => request.status)
    .filter((status) => status === 0);

  const showSubnav = () => setSubnav(!subnav);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            style={{ marginLeft: "12em" }}
          >
            <SidebarLink to="/">
              <LogoStyled src={Logo} />
            </SidebarLink>
          </Grid>
          <NavItmes>
            {user ? (
              <>
                <UsernameStyled>Welcome , {user.username}! </UsernameStyled>

                <SidebarLink
                  onClick={() => dispatch(signout(history)) && showSubnav}
                >
                  <div>
                    <FaIcons.FaSignOutAlt />
                    <SidebarLabel>Signout</SidebarLabel>
                  </div>
                </SidebarLink>
              </>
            ) : (
              <>
                <NavItmes2>
                  <SidebarLink to="/signup">
                    <div>
                      <AiIcons.AiOutlineUserAdd />
                      <SidebarLabel>Signup</SidebarLabel>
                    </div>
                  </SidebarLink>

                  <SidebarLink to="/signin">
                    <div>
                      <FaIcons.FaSignInAlt />
                      <SidebarLabel>Signin</SidebarLabel>
                    </div>
                  </SidebarLink>
                </NavItmes2>
              </>
            )}
            {user && (
              <SidebarLink
                to="profile"
                onClick={() => showSubnav}
                style={{ marginBottom: "-0.3em" }}
              >
                {requests.status !== 1 && 2 ? (
                  <Badge
                    color="secondary"
                    badgeContent={pendingRequests.length}
                    className={classes.badgeMargin}
                  >
                    <Avatar
                      aria-label="user"
                      src={profile.image}
                      alt={user.firstName}
                      className={clsx(classes.large, classes.avatar)}
                    />
                  </Badge>
                ) : (
                  <Badge color="secondary" badgeContent={0}>
                    <Avatar
                      aria-label="user"
                      src={profile.image}
                      alt={user.firstName}
                      className={clsx(classes.large, classes.avatar)}
                    />
                  </Badge>
                )}
                <div>
                  <SidebarLabel style={{ marginLeft: "1em" }}>
                    My Profile
                  </SidebarLabel>
                </div>
              </SidebarLink>
            )}
          </NavItmes>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <SidebarLink to="/">
              <div>
                <AiIcons.AiFillHome /> <SidebarLabel>Home</SidebarLabel>
              </div>
            </SidebarLink>

            <SidebarLink
              to="categories"
              onClick={() => dispatch(fetchCategory) && showSubnav}
            >
              <div>
                <FaIcons.FaListAlt /> <SidebarLabel>Categories</SidebarLabel>
              </div>
            </SidebarLink>

            <SidebarLink
              to="books"
              onClick={() => dispatch(fetchBook) && showSubnav}
            >
              <div>
                <FaIcons.FaBookOpen /> <SidebarLabel>All Books</SidebarLabel>
              </div>
            </SidebarLink>

            <SidebarLink to="/about">
              <div>
                <InfoIcon /> <SidebarLabel>About Us</SidebarLabel>
              </div>
            </SidebarLink>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
