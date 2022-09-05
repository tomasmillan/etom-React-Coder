import { FaShoppingCart } from "react-icons/fa";
import "./Cart.scss";
export default function CartWidget() {
  return (
    <i className="cartIcon">
      <FaShoppingCart />
      <h4>4</h4>
    </i>
  );
}
