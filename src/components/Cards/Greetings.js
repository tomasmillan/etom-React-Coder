import Swal from "sweetalert2";
import "../Cards/Card.scss";
import ItemCount from "../ItemCount/ItemCount";

export default function Greetings(props) {
  const addProduct = () => {
    Swal.fire("Excelente", "Has agregado el producto al carrito", "success");
  };

  return (
    <>
      <div className="cardContainer">
        <div className="cardTitle">{props.title}</div>
        <img className="cardImg" src={props.img} alt={props.description}></img>
        <div className="cardDescription">{props.description}</div>
        <div className="cardPrice">{"$ " + props.price}</div>
        <ItemCount stock={6} initial={0} addProduct={addProduct} />
      </div>
    </>
  );
}
