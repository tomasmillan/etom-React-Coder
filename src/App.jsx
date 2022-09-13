import "./App.scss";
import ItemListContainer from "./components/ItemsContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Authentication/Profile";
import Footer from "./components/Footer/Footer";
import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
