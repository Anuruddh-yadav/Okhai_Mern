import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";


// pages
import Home from "./Home/Home.jsx";
import CollectionCategory from "./All_Products/Collection.jsx";
import NavbarSlider from "./navbar/NavbarSlider.jsx";
//import Cart from "./Cart/Cart.jsx"
//import ProductView from "./collections/Clothing/products/ProductView.jsx";
// import About from "./Footer/About.jsx";
// import PartnerOnBoarding from "./Footer/PartnerOnBoarding.jsx";
// import Contact from "./Footer/Contact.jsx";
//My al clothing page
import CollectionColthing from "./All_Products/Collection.jsx";


function App() {
  return (
    <>
  
    <BrowserRouter>
    {/* <ProductView /> 
    <About />
    <PartnerOnBoarding />
    <Contact />*/}
      <Routes>

        {/* Layout route */}
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
           
          <Route path="/collections/:type" element={<CollectionCategory />} />


        </Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
