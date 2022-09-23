import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.scss";

export default function CartItem({ product }) {
  const { removeItem } = useContext(CartContext);
  return (
    <>
      <div className="itemContainerCart">
        <div className="itemCart">
          <img className="imgCart" src={product.img} alt={product.title} />
          <div className="tags">
            <p className="cartTitle">{product.title}</p>
            <div className="tag2">
              <p className="cartPrice">$ {product.price}</p>
              <p className="cartQty">
                Cantidad
                <p>{product.qty}</p>
              </p>
              <p className="cartText">
                Subtotal
                <p className="price">$ {product.qty * product.price}</p>
              </p>
            </div>
          </div>
          <button className="erase" onClick={() => removeItem(product.id)}>
            <i className="trashIcon">
              <FaTrash />
            </i>
          </button>
        </div>
      </div>
    </>
  );
}
