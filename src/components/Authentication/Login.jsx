import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineLogin } from "react-icons/ai";
import "../Navbar/navbar.scss";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()}>
      <AiOutlineLogin
        style={{
          fontSize: "30px",
          transform: "rotate(180deg)",
          margin: "0.5rem",
        }}
      />
    </button>
  );
};

export default LoginButton;
