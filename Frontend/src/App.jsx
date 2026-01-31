import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

// pages
import Home from "./Home/Home.jsx";
import ClothingCategory from "./All_Products/Clothing.jsx";
import KurtaCategory from "./All_Products/Kurtas.jsx";
import SareeCategory from "./All_Products/Sarees.jsx";
import AccessoriesCategory from "./All_Products/Accessories.jsx";
import HomeCategory from "./All_Products/Home.jsx";
import GiftCategory from "./All_Products/Gifting.jsx";
import CollectionCategory from "./All_Products/Collection.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout route */}
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
           
          <Route path="/collections/:type" element={<CollectionCategory />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
