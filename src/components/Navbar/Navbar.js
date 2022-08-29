import logo from "../Logo/logo.svg";
import "../Logo/logoStyle.scss";
import "../Navbar/navbar.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";
import CartWidget from "../Cart/CartWidget";

export default function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };
  return (
    <header>
      <a href="/" className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <nav ref={navRef}>
        <ul className="navbarList">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Catalogo</a>
          </li>
          <li>
            <a href="/">Precios</a>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
        <button className="closeIcon" onClick={showNavbar}>
          <AiOutlineClose />
        </button>
      </nav>
      <button className="menuIcon" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
