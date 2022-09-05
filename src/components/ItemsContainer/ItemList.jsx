import products from "../../utils/productList";
import Items from "../Cards/Item";
import "../ItemsContainer/ItemList.scss";
import { useEffect, useState } from "react";
import promiseArray from "../../utils/promise";

const ItemList = () => {
  const [dataProducts, setProducts] = useState([]);

  useEffect(() => {
    promiseArray(products)
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="itemsContainer">
      {dataProducts.map((item) => (
        <Items
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
};

export default ItemList;
