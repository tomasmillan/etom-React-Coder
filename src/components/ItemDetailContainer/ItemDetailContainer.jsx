import { useEffect } from "react";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetails";
import { ClipLoader } from "react-spinners";

const ItemDetailContainer = () => {
  // const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    // const response = await fetch('url'); //iria la url de la api
    // const data = await response.json();
    // const item = data.find((i) => i.id === parseInt(id));
    // return item;
    const data = {
      id: 4,
      title: "Playstation 5",
      img: "https://buenosairesimport.com/3885-large_default/playstation-5.jpg",
      description:
        "Memoria RAM: 16GB, Resolucion: 3840px x 2160px, Incluye un control",
      productStock: 2,
      price: 290000,
    };

    return new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 2000);
    });
  };
  useEffect(() => {
    setIsLoading(true);
    getData().then((product) => {
      setItem(product);
      setIsLoading(false);
    });
  }, []);

  const override = {
    display: "flex",
    margin: "2rem auto",
  };

  return (
    <div>
      {console.log(item)}
      {isLoading ? (
        <ClipLoader color="#36d7b7" cssOverride={override} size="150" />
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
