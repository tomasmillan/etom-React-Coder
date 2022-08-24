import "./App.scss";
import CarouselHome from "./components/CarouselHome/CarouselHome";
import ItemListContainer from "./components/ItemsContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CarouselHome />
      <ItemListContainer />
    </>
  );
}

export default App;
