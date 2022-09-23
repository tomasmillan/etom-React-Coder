import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const isInCart = (id) =>
    cartItems.find((item) => item.id === id) ? true : false;

  const addProduct = (item, qty) => {
    let qtyCart = {
      ...item,
      qty,
    };

    isInCart(item.id)
      ? setCartItems(
          cartItems.map((product) => {
            if (product.id === item.id) {
              product.counter += qty;
            }
            return product;
          })
        )
      : setCartItems([...cartItems, qtyCart]);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCartItems([]);
  };

  const totalPrice = () => {
    return cartItems.reduce((prev, act) => prev + act.qty * act.price, 0);
  };

  const totalProducts = () => cartItems.reduce((accu, ap) => accu + ap.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProduct,
        removeItem,
        clear,
        totalPrice,
        totalProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
