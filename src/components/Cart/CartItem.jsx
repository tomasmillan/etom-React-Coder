import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.scss";

export default function CartItem({ product }) {
  const { removeItem } = useContext(CartContext);
  return (
    <>
      <div className="itemCart">
        <img className="imgCart" src={product.img} alt={product.title} />
        <div>
          <p className="cartText">Titulo: {product.title} </p>
          <p className="cartText">Cantidad: {product.qty} </p>
          <p className="cartText">Precio unitario: ${product.price} </p>
          <p className="cartText">Subtotal: ${product.qty * product.price} </p>
          <button className="erase" onClick={() => removeItem(product.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
}
