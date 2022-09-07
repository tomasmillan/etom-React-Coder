import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./itemCount.scss";
import Swal from "sweetalert2";

const ItemCount = ({ stock = 0, initial = 0 }) => {
  const [counter, setCounter] = useState(0);
  const addProduct = () => {
    Swal.fire("Excelente", "Has agregado el producto al carrito", "success");
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
  return (
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
  );
};

export default ItemCount;
