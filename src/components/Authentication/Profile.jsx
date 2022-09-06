import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./Profile.scss";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <AiOutlineLoading3Quarters />;
  }

  return (
    isAuthenticated && (
      <div className="profileContainer">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
