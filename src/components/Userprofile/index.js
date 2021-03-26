import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ItemWrapper } from "./styles";
import Loading from "../Loading";

const Userprofile = () => {
  const profile = useSelector((state) => state.authReducer.profile);
  const loading = useSelector((state) => state.authReducer.loading);
  if (loading) return <Loading />;

  console.log(profile);
  return (
    <ItemWrapper>
      <h1 style={{ marginBottom: "2%", marginLeft: "2.5%", marginTop: "2%" }}>
        {profile.username}
      </h1>
      <img
        src={
          profile.image ??
          "https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png"
        }
        alt={profile.firstName}
      />
      <p>{`Name: ${profile.firstName} ${profile.lastName}`}</p>
      <p>{`Email: ${profile.email}`}</p>
      <div className="buttons">
        <Link to="/profile/edit">
          <button type="button" className="btn btn-dark ">
            Edit My Profile
          </button>
        </Link>
      </div>
    </ItemWrapper>
  );
};

export default Userprofile;
