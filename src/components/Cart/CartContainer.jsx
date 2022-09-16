import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.scss";

export default function CartContainer() {
  const { cartItems, removeItem, clear } = useContext(CartContext);
  return (
    <>
      <div className="cartContainer">
        <button onClick={clear}>Limpiar Carrito</button>
        {cartItems.map((item) => (
          <>
            <h2>{item.title}</h2>
            <h2>{item.counter}</h2>
            <button onClick={removeItem}>Eliminar Producto</button>
          </>
        ))}
      </div>
    </>
  );
}
