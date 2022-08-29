import "../Cards/Card.scss";
import ItemCount from "../ItemCount/ItemCount";

export default function Greetings(props) {
  return (
    <>
      <div className="cardContainer">
        <div className="cardTitle">{props.title}</div>
        <img className="cardImg" src={props.img} alt={props.description}></img>
        <div className="cardDescription">{props.description}</div>
        <div className="cardPrice">{"$ " + props.price}</div>
        <div className="details">
          <button>ver detalles</button>
        </div>
        <div>{"Stock Disponible: " + props.productStock}</div>
        <ItemCount stock={props.productStock} initial={0} />
      </div>
    </>
  );
}
