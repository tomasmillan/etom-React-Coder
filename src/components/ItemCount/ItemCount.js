import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./itemCount.scss";

const ItemCount = ({ stock = 0, initial = 0, addProduct }) => {
  const [counter, setCounter] = useState(0);

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
      <button className="addingBtn" onClick={increment}>
        <FaPlus />
      </button>
      <h4>{counter}</h4>
      <button className="addingBtn" onClick={decrease}>
        <FaMinus />
      </button>
      <button onClick={addProduct} className="addCart">
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;
