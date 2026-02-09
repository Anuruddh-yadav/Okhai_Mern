import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home/Home.jsx";
import CollectionCategory from "./All_Products/Collection.jsx";
import About from "./Footer/About.jsx";
import PartnerOnBoarding from "./Footer/PartnerOnBoarding.jsx";
import Contact from "./Footer/Contact.jsx";
import CreateAccount from "./Home/CreateAccount.jsx";
import ProductView from "./collections/Clothing/products/ProductView.jsx";



function App() {
  return (
    //  <FashoinJewellery />
    <BrowserRouter>

      <ScrollToTop />
      <Routes>
        {/* All routes inside Layout will show the Navbar and Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          {/* <Route path="/cartview" element={<Cart />} /> */}
          <Route path="/collections/:categoryName" element={<CollectionCategory />} />
          <Route path="/product/:slug" element={<ProductView />} />


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