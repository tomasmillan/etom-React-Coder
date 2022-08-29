import products from "../../utils/productList";
import Greetings from "../Cards/Greetings";
import "../ItemsContainer/ItemList.scss";
import { useEffect, useState } from "react";
import promiseArray from "../../utils/promise";

export default function ItemListContainer() {
  const [dataProducts, setProducts] = useState([]);

  useEffect(() => {
    promiseArray(products)
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="itemsContainer">
      {dataProducts.map((item) => (
        <Greetings
          key={item.id}
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
