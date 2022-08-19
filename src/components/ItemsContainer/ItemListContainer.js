import Greetings from "../Cards/Greetings";
import "../ItemsContainer/ItemList.scss";

export default function ItemListContainer() {
  return (
    <div className="itemsContainer">
      <Greetings
        title="Raqueta de tenis"
        description="Con estas super raqueta, te vas a sentir como Nadal"
        price="$ 9000"
      />
      <Greetings
        title="Remera de Boca"
        description="Con esta casaca, te vas a sentir como Roman"
        price="$ 6000"
      />
      <Greetings
        title="Buzo Arquero"
        description="El dibu martinez un poroto al lado tuyo"
        price="$ 10.000"
      />
      <Greetings
        title="Scaloneta Bus"
        description="Subite a la Scaloneta rumbo a catar"
        price="$ 12.000"
      />
    </div>
  );
}
