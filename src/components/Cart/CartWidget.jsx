import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.scss";
export default function CartWidget() {
  const { cartItems } = useContext(CartContext);

  let itemsCart = 0;

  // eslint-disable-next-line array-callback-return
  cartItems.map((item) => {
    itemsCart = itemsCart + item.counter;
    console.log(itemsCart);
  });
  return (
    <i className="cartIcon">
      <FaShoppingCart />
      <h4>{itemsCart}</h4>
    </i>
  );
}
