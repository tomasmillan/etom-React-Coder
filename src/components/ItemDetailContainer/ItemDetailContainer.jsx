import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetails";
import { ClipLoader } from "react-spinners";
import { firestoreFetchOne } from "../../utils/firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firestoreFetchOne(id)
      .then((result) => {
        console.log(result);
        setItem(result);
        setIsLoading(false);
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
