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
        <p>{user.nickname}</p>
        <p>{user.email}</p>
        <p>{user.birthdate}</p>
        <p>{user.address}</p>
        <p>{user.gender}</p>
        <p>{user.zoneinfo}</p>
        <h6>
          Deberia traer cierta informacion, si no se ve es por que no esta
          configurada en la cuenta
        </h6>
      </div>
    )
  );
};

export default Profile;
