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
          fontSize: "2rem",
          fontWeight: "600",
          transform: "rotate(180deg)",
        }}
      />
    </button>
  );
};

export default LoginButton;
