import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home/Home.jsx";
import CollectionCategory from "./All_Products/Collection.jsx";
import NavbarSlider from "./navbar/NavbarSlider.jsx";
//import Cart from "./Cart/Cart.jsx"
import ProductView from "./collections/Clothing/products/ProductView.jsx";
//My al clothing page
import CollectionColthing from "./All_Products/Collection.jsx";


function App() {
  return (
    <BrowserRouter>
    <ProductView />
      {/*<Routes>

         Layout route 
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:type" element={<CollectionCategory />} />
          
          {/* Footer Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/partner-onboarding" element={<PartnerOnBoarding />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;