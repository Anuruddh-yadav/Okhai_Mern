import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";


// pages
import Home from "./Home/Home.jsx";
import CollectionCategory from "./All_Products/Collection.jsx";
import NavbarSlider from "./navbar/NavbarSlider.jsx";
//import Cart from "./Cart/Cart.jsx"
//My al clothing page
import CollectionColthing from "./All_Products/Collection.jsx";


function App() {
  return (
    <>
  
    <BrowserRouter>
      <NavbarSlider />
      
      <Routes>

        {/* Layout route */}
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
           
          <Route path="/collections/:type" element={<CollectionCategory />} />

          <Route path="/collections/:type" element={<CollectionColthing />} />

        </Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
