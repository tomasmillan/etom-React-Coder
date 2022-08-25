import products from "../../utils/productList";
import Greetings from "../Cards/Greetings";
import "../ItemsContainer/ItemList.scss";

export default function ItemListContainer() {
  return (
    <div className="itemsContainer">
      {products.map((item) => (
        <Greetings
          title={item.title}
          img={item.img}
          description={item.description}
          price={item.price}
          productStock={item.productStock}
        />
      ))}
    </div>
  );
}
