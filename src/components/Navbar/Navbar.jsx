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
        <h2 className="App-logo">tom tech</h2>
      </Link>
      <nav ref={navRef}>
        <ul className="navbarList">
          <li onClick={showNavbar}>
            <Link to="/" className="link">
              Inicio
            </Link>
          </li>
          <li onClick={showNavbar}>
            <Link to="/category/computacion" className="link">
              Computación
            </Link>
          </li>
          <li onClick={showNavbar}>
            <Link to="/category/audio" className="link">
              Audio
            </Link>
          </li>
          <li onClick={showNavbar}>
            <Link to="/category/video" className="link">
              Video
            </Link>
          </li>
          <li onClick={showNavbar}>
            <Link to="/category/gamer" className="link">
              Videojuegos
            </Link>
          </li>
        </ul>
        <button className="closeIcon" onClick={showNavbar}>
          <AiOutlineClose />
        </button>
      </nav>
      <div className="log">
        <li>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </li>
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
