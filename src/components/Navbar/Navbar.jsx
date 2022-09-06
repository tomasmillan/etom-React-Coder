import logo from "../Logo/logo.svg";
import "../Logo/logoStyle.scss";
import "../Navbar/navbar.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";
import LoginButton from "../Authentication/Login";
import LogoutButton from "../Authentication/Logout";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };
  const { isAuthenticated, user, isLoading } = useAuth0();

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <nav ref={navRef}>
        <ul className="navbarList">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/product/1">Catalogo</Link>
          </li>
          <li>
            <Link to="/">Precios</Link>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
        <button className="closeIcon" onClick={showNavbar}>
          <AiOutlineClose />
        </button>
      </nav>
      <div className="log">
        {isAuthenticated ? (
          <>
            <Link to="/profile">
              {" "}
              {/*profile:id para cuando tenga distintos ids */}
              {!isLoading && (
                <img
                  src={user.picture}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                  className="navProfileImg"
                ></img>
              )}
            </Link>
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
        <button className="menuIcon" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
