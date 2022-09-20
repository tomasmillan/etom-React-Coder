import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetails.scss";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function ItemDetail({ item }) {
  const { addProduct } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qty) => {
    Swal.fire(
      "Excelente",
      "Has agregado " + qty + " productos al carrito",
      "success"
    );
    setItemCount(qty);
    addProduct(item, qty);
  };

  return (
    <div className="detailContainer">
      <div className="columLeft">
        <img src={item.img} alt={item.description} />
      </div>
      <div className="columRight">
        <div className="detailTitle">{item.title}</div>
        <div className="detailDescription">{item.description}</div>
        <div className="detailPrice">{"$ " + item.price}</div>
        <div className="detailStock">
          {"Stock Disponible: " + item.productStock}
        </div>
        <div>
          {itemCount === 0 ? (
            <ItemCount
              stock={item.productStock}
              initial={itemCount}
              item={item}
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
    </div>
  );
}
