import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// Components
import Loading from "../Loading";
import BookList from "../BookList";
import { viewProfile } from "../../store/actions/authActions";
// Styles
import { ItemWrapper, Title, ButtonWrapper } from "./styles";
import { AddButtonStyled } from "../../styles";


const Userprofile = () => {
  const userId = useParams().userId;

  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(viewProfile(userId));
    }
  }, []);

  const profile = useSelector((state) => state.authReducer.profile);
  const loading = useSelector((state) => state.authReducer.loading);

  const otheProfile = useSelector((state) => state.authReducer.otheProfile);
  const otheProfileloading = useSelector(
    (state) => state.authReducer.otheProfileloading
  );
  if (!userId) {
    console.log("🚀 ~ file: index.js ~ line 32 ~ Userprofile ~ userId", userId);
    if (loading) return <Loading />;
  } else if (otheProfileloading) return <Loading />;

  return (
    <>
      {!userId ? (
        <>
          <ItemWrapper>
            <h1
              style={{
                marginBottom: "2%",
                marginLeft: "2.5%",
                marginTop: "2%",
              }}
            >
              {profile.username}
            </h1>
            <img
              src={
                profile.image ??
                "https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png"
              }
              alt={profile.firstName}
            />
            <p>
              Name: {profile.firstName} {profile.lastName}
            </p>
            <p>{`Email: ${profile.email}`}</p>
            <div className="buttons">
              <Link to="/profile/edit">
                <button type="button" className="btn btn-dark ">
                  Edit My Profile
                </button>
              </Link>
            </div>
          </ItemWrapper>
          <div>
            <Title>My Books</Title>
            <ButtonWrapper>
              <ButtonWrapper>
                <Link to={`/books/new`}>
                  <AddButtonStyled>Add books</AddButtonStyled>
                </Link>
              </ButtonWrapper>
            </ButtonWrapper>
            <BookList books={profile.mybook} />
          </div>
        </>
      ) : (
        <>
          <ItemWrapper>
            <h1
              style={{
                marginBottom: "2%",
                marginLeft: "2.5%",
                marginTop: "2%",
              }}
            >
              {otheProfile.username}
            </h1>
            <img
              src={
                "https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png"
              }
              alt={otheProfile.firstName}
            />
            <p>
              Name: {otheProfile.firstName} {otheProfile.lastName}
            </p>
            <p>{`Email: ${otheProfile.email}`}</p>
            <div className="buttons"></div>
          </ItemWrapper>
          <div>
            <Title>has Books</Title>

            <ButtonWrapper>
              <ButtonWrapper>
                <Link to={`/requests/new`}>
                  <AddButtonStyled>Request</AddButtonStyled>
                </Link>
              </ButtonWrapper>
            </ButtonWrapper>
            <BookList books={otheProfile.hasbook} />
          </div>
        </>
      )}
    </>
  );
};

export default Userprofile;
