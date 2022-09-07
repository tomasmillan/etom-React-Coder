import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetails";
import { ClipLoader } from "react-spinners";
import products from "../../utils/productList";
import promiseArray from "../../utils/promise";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    promiseArray(products.find((item) => parseInt(item.id) == id))
      .then((product) => {
        setItem(product);
        setIsLoading(false);
        console.log(typeof item.id);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const override = {
    display: "flex",
    margin: "2rem auto",
  };

  return (
    <div>
      {isLoading ? (
        <ClipLoader color="#36d7b7" cssOverride={override} />
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
