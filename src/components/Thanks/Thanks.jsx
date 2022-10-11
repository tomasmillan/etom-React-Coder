import { Link } from "react-router-dom";
import "./thanks.scss";

export default function Thanks() {
  return (
    <div className="thanksContainer">
      <div className="row-1">
        <h2>Gracias por su compra en Tom Tech!!</h2>
      </div>
      <div className="row-2">
        <h3>
          A la brevedad le llegara un mail con la confirmación del pedido y los
          detalles de entrega
        </h3>
        <Link to="/">
          <button className="home">volver al inicio</button>
        </Link>
      </div>
    </div>
  );
}
