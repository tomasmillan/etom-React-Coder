import "./App.scss";
import ItemListContainer from "./components/ItemsContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;
