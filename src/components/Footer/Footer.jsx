import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="usefulLinks">
        <li>
          <Link className="footerLinks" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="footerLinks" to="/category/photography">
            Fotografia
          </Link>
        </li>
        <li>
          <Link className="footerLinks" to="/category/home">
            Hogar
          </Link>
        </li>
        <li>
          <Link className="footerLinks" to="/category/gamer">
            Gamer
          </Link>
        </li>
      </div>
      <div className="suscribeForm">
        <form>
          <input
            type="email"
            name="mailSuscribe"
            id="suscribe"
            placeholder="juan@mail.com"
          />
          <input type="submit" value="submit" />
        </form>
      </div>
      <div className="copyAuthor">
        <AiOutlineCopyright />
        <p>Creado por TML - 2022</p>
      </div>
    </div>
  );
};

export default Footer;
