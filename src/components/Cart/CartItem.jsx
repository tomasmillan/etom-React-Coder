import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.scss";

export default function CartItem({ product }) {
  const { removeItem } = useContext(CartContext);
  return (
    <>
      <div className="itemCart">
        <div className="box">
          <img className="imgCart" src={product.img} alt={product.title} />
          <div className="content">
            <h4 className="cartTitle">{product.title}</h4>
            <p className="cartPrice">$ {product.price}</p>
            <div className="cartSub">
              <h3>
                Cantidad
                <p className="semiBold">{product.qty}</p>
              </h3>
              <h3>
                Subtotal
                <p className="semiBold">$ {product.qty * product.price}</p>
              </h3>
            </div>
            <button className="erase" onClick={() => removeItem(product.id)}>
              <i className="trashIcon">
                <FaTrash />
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
