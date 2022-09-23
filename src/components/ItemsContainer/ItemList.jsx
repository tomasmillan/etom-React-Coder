import Items from "../Cards/Item";
import "../ItemsContainer/ItemList.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../../utils/firebaseConfig";

const ItemList = () => {
  const [dataProducts, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // if (id) {
    //   promiseArray(
    //     products.filter((itemProduct) => itemProduct.category === id)
    //   )
    //     .then((result) => setProducts(result))
    //     .catch((err) => console.log(err));
    // } else {
    //   promiseArray(products)
    //     .then((result) => setProducts(result))
    //     .catch((err) => console.log(err));
    // }
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
