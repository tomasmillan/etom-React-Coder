import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.scss";
import CartItem from "./CartItem";

export default function CartContainer() {
  const { cartItems, totalPrice, clear } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to={"/"}> Seguir comprando</Link>
      </>
    );
  }
  return (
    <div>
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <p>Total: {totalPrice()}</p>
      <button onClick={clear}> Limpiar Carrito</button>
      <button> Finalizar Compra</button>
    </div>
  );
}
