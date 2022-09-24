import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.scss";
import CartItem from "./CartItem";

export default function CartContainer() {
  const { cartItems, totalPrice, clear, end } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cartEmpty">
        <p>No hay elementos en el carrito</p>
        <Link to={"/"} className="continue">
          {" "}
          Seguir comprando
        </Link>
      </div>
    );
  }
  return (
    <div className="cartContainer">
      <div className="cartHeader">
        <h2>Mi Carrito</h2>
        <Link to={"/"} className="linkM">
          Seguir Comprando
        </Link>
      </div>
      <div className="project">
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <div className="cartDetails">
          <input
            type="text"
            className="code"
            placeholder="Ingresa tu codigo"
          ></input>
          <p>Subtotal $ {totalPrice()}</p>
          <p>Descuento $ 0</p>
          <h2>Total $ {totalPrice()}</h2>
          <div className="cartBtns">
            <button onClick={clear} className="clean btnC">
              {" "}
              Limpiar Carrito
            </button>
            <button className="end btnC" onClick={end}>
              {" "}
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
