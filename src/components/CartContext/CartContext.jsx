import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const isInCart = (id) => {
    const double = cartItems.find((item) => item.id === id);
    return double;
  };

  const addItem = (item, counter) => {
    let qtyCart = {
      ...item,
      counter,
    };

    isInCart(item.id)
      ? setCartItems(
          cartItems.map((product) => {
            if (product.id === item.id) {
              product.counter += counter;
              console.log("soy linea 31" + product);
            }
            return product;
          })
        )
      : setCartItems([...cartItems, qtyCart]);
    console.log("soy linea 37" + cartItems);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCartItems([]);
  };
  console.log(cartItems);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}
