import ItemCount from "../ItemCount/ItemCount";
import "./itemDetails.scss";

export default function ItemDetail({ item }) {
  return (
    <>
      <div className="detailContainer">
        <div className="columLeft">
          <img src={item.img} alt={item.description} />
        </div>
        <div className="columRight">
          <div className="detailTitle">{item.title}</div>
          <div className="detailDescription">{item.description}</div>
          <div className="detailPrice">{"$ " + item.price}</div>
          <div className="detailStock">
            {"Stock Disponible: " + item.productStock}
          </div>
          <ItemCount stock={item.productStock} initial={0} />
        </div>
      </div>
    </>
  );
}
