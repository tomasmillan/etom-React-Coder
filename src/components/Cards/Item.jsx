import { Link } from "react-router-dom";
import "../Cards/Card.scss";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";

export default function Items(props) {
  const { addProduct } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qty) => {
    Swal.fire(
      "Excelente",
      "Has agregado " + qty + " productos al carrito",
      "success"
    );
    setItemCount(qty);
    addProduct(props, qty);
  };
  return (
    <>
      <div className="cardContainer">
        <div className="cardTitle">{props.title}</div>
        <img className="cardImg" src={props.img} alt={props.description}></img>
        <div className="cardPrice">{"$ " + props.price}</div>
        <div className="details">
          <Link to={`/product/${props.id}`}>ver detalles</Link>
        </div>
        <div>
          {itemCount === 0 ? (
            <ItemCount
              stock={props.productStock}
              initial={itemCount}
              item={props}
              onAdd={onAdd}
            />
          ) : (
            <Link to="/cart">
              {" "}
              <button className="checkOutBtn">Checkout</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
