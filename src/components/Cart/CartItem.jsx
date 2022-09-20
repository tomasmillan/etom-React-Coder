import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

export default function CartItem({ product }) {
  const { removeItem } = useContext(CartContext);
  return (
    <>
      <div className="itemCart">
        <img className="img" src={product.img} alt="Nombre de la imagen" />
        <div>
          <p>Titulo: {product.title} </p>
          <p>Cantidad: {product.qty} </p>
          <p>Precio unitario: ${product.price} </p>
          <p>Subtotal: ${product.qty * product.price} </p>
          <button onClick={() => removeItem(product.id)}>Eliminar</button>
        </div>
      </div>
    </>
  );
}
