import Items from "../Cards/Item";
import "../ItemsContainer/ItemList.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../../utils/firebaseConfig";

const ItemList = () => {
  const [dataProducts, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    firestoreFetch(id).then((res) => {
      setProducts(res);
    });
  }, [id]);

  return (
    <div className="itemsContainer">
      {dataProducts.map((item) => (
        <Items
          key={item.id}
          id={item.id}
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
