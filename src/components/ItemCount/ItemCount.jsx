import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./itemCount.scss";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

export default function ItemCount({ stock = 0, initial = 0, item }) {
  const [counter, setCounter] = useState(0);
  const [purchase, setPurchase] = useState(false);
  const { addItem } = useContext(CartContext);

  const addProduct = () => {
    Swal.fire(
      "Excelente",
      "Has agregado " + counter + " productos al carrito",
      "success"
    );
    setPurchase(true);
    addItem({ item, counter });
  };

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const decrease = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };
  return purchase === false ? (
    <div className="addCartContainer">
      <div className="addingBtns">
        <button className="addingBtn" onClick={decrease}>
          <FaMinus />
        </button>
        <h4>{counter}</h4>
        <button className="addingBtn" onClick={increment}>
          <FaPlus />
        </button>
      </div>
      <button
        onClick={counter === 0 ? null : addProduct}
        className={`addCart ${counter === 0 ? "disabled" : ""}`}
      >
        Agregar
      </button>
    </div>
  ) : (
    <Link to="/cart">
      <button className="checkOutBtn">Checkout</button>
    </Link>
  );
}
