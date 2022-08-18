import logo from "../Logo/logo.svg";
import "../Logo/logoStyle.scss";
import "../Navbar/navbar.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };
  return (
    <>
      <nav ref={navRef}>
        <a href="/" className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <ul>
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
            <a href="/">Carrito</a>
          </li>
        </ul>
        <button className="menuIcon" onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
      <button className="closeIcon">
        <AiOutlineClose />
      </button>
    </>
  );
}
