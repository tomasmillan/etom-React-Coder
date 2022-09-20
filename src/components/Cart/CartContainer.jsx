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
    <div className="cartContainer">
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <div className="cartDetails">
        <p>Total: ${totalPrice()}</p>
        <div className="cartBtns">
          <button onClick={clear} className="clean">
            {" "}
            Limpiar Carrito
          </button>
          <button className="end"> Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}
