import axios from "axios";
import { useEffect, useState } from "react";
import "./marvel.scss";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Marvel = () => {
  // const urlApi =
  //   "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=2c20336e3a63c7c58df83c3f7073863b&hash=41b2f00e60471590f713e494333b1879";

  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=2c20336e3a63c7c58df83c3f7073863b&hash=41b2f00e60471590f713e494333b1879"
      )
      .then((res) => {
        setComics(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(comics);

  return (
    <div className="cardsContainer">
      {comics.map((item) => {
        const { creators } = item;
        const { items: creatorsList } = creators;
        return (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Img
              className="marvelImg"
              variant="top"
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={item.thumbnail.title}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {creatorsList.map((creator) => {
                  return (
                    <li className="authors">
                      {creator.role}: {creator.name}
                    </li>
                  );
                })}
              </Card.Text>
              <Card.Text>$ {item.prices[0].price}</Card.Text>
              <Button variant="primary">Detalles</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
//
// API KEY  120e95234087742ed201946af404d9cb9ace7447e2c20336e3a63c7c58df83c3f7073863b
export default Marvel;
