import "./App.scss";
import CarouselHome from "./components/CarouselHome/CarouselHome";
import ItemListContainer from "./components/ItemsContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Marvel from "./components/MarvelApi/api";

function App() {
  return (
    <>
      <Navbar />
      <CarouselHome />
      <ItemListContainer />
      <Marvel />
    </>
  );
}

export default App;
