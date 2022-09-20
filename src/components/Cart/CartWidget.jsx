import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.scss";

export default function CartWidget() {
  const { totalProducts } = useContext(CartContext);

  return (
    <i className="cartIcon">
      <FaShoppingCart />
      <h4>{totalProducts() || ""}</h4>
    </i>
  );
}
