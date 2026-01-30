import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

// pages
import Home from "./Home/Home.jsx";
import ClothingCategory from "./All_Products/Clothing.jsx";
import KurtaCategory from "./All_Products/Kurtas.jsx";
import SareeCategory from "./All_Products/Sarees.jsx";
import AccessoriesCategory from "./All_Products/Accessories.jsx";
import HomeCategory from "./All_Products/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout route */}
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/clothing/:type" element={<ClothingCategory />} />
          <Route path="/kurtas/:type" element={<KurtaCategory />} />
          <Route path="/sarees/:type" element={<SareeCategory />} />
          <Route path="/accessories/:type" element={<AccessoriesCategory />} />
          <Route path="/home-decor/:type" element={<HomeCategory />} />
      

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
