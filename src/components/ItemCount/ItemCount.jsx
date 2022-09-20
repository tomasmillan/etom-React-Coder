import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./itemCount.scss";

export default function ItemCount({ stock, onAdd }) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const decrease = () => {
    if (counter === 0) {
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
        onClick={() => onAdd(counter)}
        className={`addCart ${counter === 0 ? "disabled" : ""}`}
      >
        Agregar
      </button>
    </div>
  );
}
