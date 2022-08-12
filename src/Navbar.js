import logo from "./logo.svg";

export default function Navbar() {
  return (
    <nav className="nav">
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
    </nav>
  );
}
