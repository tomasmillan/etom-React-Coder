import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineLogout } from "react-icons/ai";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      <AiOutlineLogout
        style={{
          fontSize: "30px",
          transform: "rotate(180deg)",
          margin: "0.5rem",
        }}
      />
    </button>
  );
};

export default LogoutButton;
