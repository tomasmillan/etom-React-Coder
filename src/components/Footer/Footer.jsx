import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="row1">
        <div className="usefulLinks">
          <li className="ftTitles">Productos</li>
          <li>
            <Link className="footerLinks" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/category/photography">
              Computación
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/category/home">
              Audio
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/category/gamer">
              Video
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/category/gamer">
              Videojuegos
            </Link>
          </li>
        </div>
        <div className="usefulLinks2">
          <li className="ftTitles">Ayuda</li>
          <li>
            <Link className="footerLinks" to="/">
              Seguimiento
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/y">
              Envios
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/category/home">
              Devoluciones
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/category/gamer">
              Metodos de Pago
            </Link>
          </li>
        </div>
        <div className="usefulLinks3">
          <li className="ftTitles">Informacion</li>
          <li>
            <Link className="footerLinks" to="/">
              ¿Quiénes Somos?
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/category/photography">
              Sustentabilidad
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/category/home">
              Noticias
            </Link>
          </li>
          <li>
            <Link className="footerLinks" to="/category/gamer">
              Politicas de Privacidad
            </Link>
          </li>
        </div>
      </div>
      <div className="copyAuthor">
        <Link to="/" className="logoFt">
          <h2>tom tech</h2>
        </Link>
        <div className="center">
          <AiOutlineCopyright className="copyright" />
          <p>2022 Tom Tech Inc. All rights reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
