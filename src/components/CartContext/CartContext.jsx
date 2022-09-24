import { useState } from "react";
import { createContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";

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

  const end = () => {
    const newDate = new Date().toLocaleString();
    const order = {
      buyer: {
        name: "Tomas",
        email: "tomas@mail.com",
        phone: "12345",
        address: "siempre viva 834",
      },
      items: cartItems.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price * product.qty,
        quantity: product.qty,
        date: newDate,
      })),
    };
    const finish = () => {
      const db = getFirestore();
      const ordersCol = collection(db, "orders");
      addDoc(ordersCol, order).then(({ id }) => console.log(id));
    };
    return finish();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProduct,
        removeItem,
        clear,
        totalPrice,
        totalProducts,
        end,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
