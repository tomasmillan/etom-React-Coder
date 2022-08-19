import "../Cards/Card.scss";
export default function Greetings(props) {
  return (
    <>
      <div className="cardContainer">
        <div className="cardTitle">{props.title}</div>
        <div className="cardDescription">{props.description}</div>
        <div className="cardPrice">{props.price}</div>
        <button className="cardBtn">Agregar</button>
      </div>
    </>
  );
}
